import { PrismaClient } from '../prisma/generated/client';
import { add } from 'date-fns';

const prisma = new PrismaClient();

async function main() {
	await prisma.courseEnrollment.deleteMany({}); //Should not be done in production
	await prisma.testResult.deleteMany({}); //Should not be done in production
	await prisma.user.deleteMany({}); //Should not be done in production
	await prisma.test.deleteMany({}); // Should not be done in production
	await prisma.course.deleteMany({}); // Should not be done in production

	const james = await prisma.user.create({
		data: {
			email: 'james@hey.de',
			firstName: 'James',
			lastName: 'Hall',
			social: {
				twitter: 'jameshall',
				discord: 'jameshall#1314',
			},
		},
	});
	console.log(james);

	const sarah = await prisma.user.create({
		data: {
			email: 'sarah@hey.de',
			firstName: 'sarah',
			lastName: 'yuth',
		},
	});

	console.log(sarah);

	const weekFromNow = add(new Date(), { days: 7 });
	const twoWeekFromNow = add(new Date(), { days: 14 });
	const monthFromNow = add(new Date(), { days: 28 });

	const course = await prisma.course.create({
		data: {
			name: 'IT 2 Database Systems',
			courseDetails: 'An Introduction to Database Systems',
			tests: {
				create: [
					{
						date: weekFromNow,
						name: 'Presentation',
					},
					{
						date: twoWeekFromNow,
						name: 'Term Paper',
					},
					{
						date: monthFromNow,
						name: 'Exam',
					},
				],
			},
			members: {
				create: {
					role: 'TEACHER',
					user: {
						connect: { email: james.email },
					},
				},
			},
		},
		include: {
			tests: true,
			members: {
				include: { user: true },
			},
		},
	});

	console.log(course);

	const testResults = [400, 500, 900];

	let counter = 0;
	for (const test of course.tests) {
		const jamesTestResult = await prisma.testResult.create({
			data: {
				gradedBy: { connect: { email: james.email } },
				student: { connect: { email: sarah.email } },
				test: { connect: { id: test.id } },
				result: testResults[counter],
			},
		});

		console.log(jamesTestResult);

		counter++;
	}

	const results = await prisma.testResult.aggregate({
		where: { studentId: sarah.id },
		avg: { result: true },
		max: { result: true },
		min: { result: true },
		count: true,
	});

	console.log(results);
}

main()
	.catch((e: Error) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
