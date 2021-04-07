
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 */

export type User = {
  id: number
  updatedAt: Date
  createdAt: Date
  email: string
  firstName: string
  lastName: string
  social: Prisma.JsonValue | null
}

/**
 * Model Course
 */

export type Course = {
  id: number
  name: string
  courseDetails: string
}

/**
 * Model CourseEnrollment
 */

export type CourseEnrollment = {
  createdAt: Date
  role: UserRole
  userId: number
  courseId: number
}

/**
 * Model Test
 */

export type Test = {
  id: number
  updatedAt: Date
  name: string
  date: Date
  courseId: number
}

/**
 * Model TestResult
 */

export type TestResult = {
  id: number
  createdAt: Date
  result: number
  graderId: number
  studentId: number
  testId: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const UserRole: {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<GlobalReject>;

  /**
   * `prisma.courseEnrollment`: Exposes CRUD operations for the **CourseEnrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseEnrollments
    * const courseEnrollments = await prisma.courseEnrollment.findMany()
    * ```
    */
  get courseEnrollment(): Prisma.CourseEnrollmentDelegate<GlobalReject>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<GlobalReject>;

  /**
   * `prisma.testResult`: Exposes CRUD operations for the **TestResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestResults
    * const testResults = await prisma.testResult.findMany()
    * ```
    */
  get testResult(): Prisma.TestResultDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 2.20.1
   * Query Engine version: 60ba6551f29b17d7d6ce479e5733c70d9c00860e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  export type Union = any

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, 'avg' | 'sum' | 'count' | 'min' | 'max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Course: 'Course',
    CourseEnrollment: 'CourseEnrollment',
    Test: 'Test',
    TestResult: 'TestResult'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    count: UserCountAggregateOutputType | null
    avg: UserAvgAggregateOutputType | null
    sum: UserSumAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number
  }

  export type UserSumAggregateOutputType = {
    id: number
  }

  export type UserMinAggregateOutputType = {
    id: number
    updatedAt: Date | null
    createdAt: Date | null
    email: string | null
    firstName: string | null
    lastName: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number
    updatedAt: Date | null
    createdAt: Date | null
    email: string | null
    firstName: string | null
    lastName: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    updatedAt: number | null
    createdAt: number | null
    email: number | null
    firstName: number | null
    lastName: number | null
    social: number | null
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    email?: true
    firstName?: true
    lastName?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    email?: true
    firstName?: true
    lastName?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    email?: true
    firstName?: true
    lastName?: true
    social?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }


    
    
  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: UserCountAggregateInputType | true
    avg?: UserAvgAggregateInputType
    sum?: UserSumAggregateInputType
    min?: UserMinAggregateInputType
    max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    updatedAt: Date
    createdAt: Date
    email: string
    firstName: string
    lastName: string
    social: JsonValue | null
    count: UserCountAggregateOutputType | null
    avg: UserAvgAggregateOutputType | null
    sum: UserSumAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<Array<
    PickArray<UserGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof UserGroupByOutputType))]: GetScalarType<T[P], UserGroupByOutputType[P]>
    }
  >>
    

  export type UserSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    social?: boolean
    courses?: boolean | CourseEnrollmentFindManyArgs
    TestResults?: boolean | TestResultFindManyArgs
    TestsGraded?: boolean | TestResultFindManyArgs
  }

  export type UserInclude = {
    courses?: boolean | CourseEnrollmentFindManyArgs
    TestResults?: boolean | TestResultFindManyArgs
    TestsGraded?: boolean | TestResultFindManyArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'courses'
        ? Array < CourseEnrollmentGetPayload<S['include'][P]>>  :
        P extends 'TestResults'
        ? Array < TestResultGetPayload<S['include'][P]>>  :
        P extends 'TestsGraded'
        ? Array < TestResultGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'courses'
        ? Array < CourseEnrollmentGetPayload<S['select'][P]>>  :
        P extends 'TestResults'
        ? Array < TestResultGetPayload<S['select'][P]>>  :
        P extends 'TestsGraded'
        ? Array < TestResultGetPayload<S['select'][P]>>  : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    courses<T extends CourseEnrollmentFindManyArgs = {}>(args?: Subset<T, CourseEnrollmentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CourseEnrollment>>, PrismaPromise<Array<CourseEnrollmentGetPayload<T>>>>;

    TestResults<T extends TestResultFindManyArgs = {}>(args?: Subset<T, TestResultFindManyArgs>): CheckSelect<T, PrismaPromise<Array<TestResult>>, PrismaPromise<Array<TestResultGetPayload<T>>>>;

    TestsGraded<T extends TestResultFindManyArgs = {}>(args?: Subset<T, TestResultFindManyArgs>): CheckSelect<T, PrismaPromise<Array<TestResult>>, PrismaPromise<Array<TestResultGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
  }



  /**
   * Model Course
   */


  export type AggregateCourse = {
    count: CourseCountAggregateOutputType | null
    avg: CourseAvgAggregateOutputType | null
    sum: CourseSumAggregateOutputType | null
    min: CourseMinAggregateOutputType | null
    max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number
  }

  export type CourseSumAggregateOutputType = {
    id: number
  }

  export type CourseMinAggregateOutputType = {
    id: number
    name: string | null
    courseDetails: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number
    name: string | null
    courseDetails: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number | null
    courseDetails: number | null
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    courseDetails?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    courseDetails?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    courseDetails?: true
    _all?: true
  }

  export type CourseAggregateArgs = {
    /**
     * Filter which Course to aggregate.
    **/
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
    **/
    orderBy?: Enumerable<CourseOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }


    
    
  export type CourseGroupByArgs = {
    where?: CourseWhereInput
    orderBy?: Enumerable<CourseOrderByInput>
    by: Array<CourseScalarFieldEnum>
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: CourseCountAggregateInputType | true
    avg?: CourseAvgAggregateInputType
    sum?: CourseSumAggregateInputType
    min?: CourseMinAggregateInputType
    max?: CourseMaxAggregateInputType
  }


  export type CourseGroupByOutputType = {
    id: number
    name: string
    courseDetails: string
    count: CourseCountAggregateOutputType | null
    avg: CourseAvgAggregateOutputType | null
    sum: CourseSumAggregateOutputType | null
    min: CourseMinAggregateOutputType | null
    max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Promise<Array<
    PickArray<CourseGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof CourseGroupByOutputType))]: GetScalarType<T[P], CourseGroupByOutputType[P]>
    }
  >>
    

  export type CourseSelect = {
    id?: boolean
    name?: boolean
    courseDetails?: boolean
    members?: boolean | CourseEnrollmentFindManyArgs
    tests?: boolean | TestFindManyArgs
  }

  export type CourseInclude = {
    members?: boolean | CourseEnrollmentFindManyArgs
    tests?: boolean | TestFindManyArgs
  }

  export type CourseGetPayload<
    S extends boolean | null | undefined | CourseArgs,
    U = keyof S
      > = S extends true
        ? Course
    : S extends undefined
    ? never
    : S extends CourseArgs | CourseFindManyArgs
    ?'include' extends U
    ? Course  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'members'
        ? Array < CourseEnrollmentGetPayload<S['include'][P]>>  :
        P extends 'tests'
        ? Array < TestGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Course ?Course [P]
  : 
          P extends 'members'
        ? Array < CourseEnrollmentGetPayload<S['select'][P]>>  :
        P extends 'tests'
        ? Array < TestGetPayload<S['select'][P]>>  : never
  } 
    : Course
  : Course


  type CourseCountArgs = Merge<
    Omit<CourseFindManyArgs, 'select' | 'include'> & {
      select?: CourseCountAggregateInputType | true
    }
  >

  export interface CourseDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CourseFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Course'> extends True ? CheckSelect<T, Prisma__CourseClient<Course>, Prisma__CourseClient<CourseGetPayload<T>>> : CheckSelect<T, Prisma__CourseClient<Course | null >, Prisma__CourseClient<CourseGetPayload<T> | null >>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CourseFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Course'> extends True ? CheckSelect<T, Prisma__CourseClient<Course>, Prisma__CourseClient<CourseGetPayload<T>>> : CheckSelect<T, Prisma__CourseClient<Course | null >, Prisma__CourseClient<CourseGetPayload<T> | null >>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseFindManyArgs>(
      args?: SelectSubset<T, CourseFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Course>>, PrismaPromise<Array<CourseGetPayload<T>>>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
    **/
    create<T extends CourseCreateArgs>(
      args: SelectSubset<T, CourseCreateArgs>
    ): CheckSelect<T, Prisma__CourseClient<Course>, Prisma__CourseClient<CourseGetPayload<T>>>

    /**
     * Create many Courses.
     *     @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     *     @example
     *     // Create many Courses
     *     const course = await prisma.course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseCreateManyArgs>(
      args?: SelectSubset<T, CourseCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
    **/
    delete<T extends CourseDeleteArgs>(
      args: SelectSubset<T, CourseDeleteArgs>
    ): CheckSelect<T, Prisma__CourseClient<Course>, Prisma__CourseClient<CourseGetPayload<T>>>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseUpdateArgs>(
      args: SelectSubset<T, CourseUpdateArgs>
    ): CheckSelect<T, Prisma__CourseClient<Course>, Prisma__CourseClient<CourseGetPayload<T>>>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseDeleteManyArgs>(
      args?: SelectSubset<T, CourseDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseUpdateManyArgs>(
      args: SelectSubset<T, CourseUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
    **/
    upsert<T extends CourseUpsertArgs>(
      args: SelectSubset<T, CourseUpsertArgs>
    ): CheckSelect<T, Prisma__CourseClient<Course>, Prisma__CourseClient<CourseGetPayload<T>>>

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CourseClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    members<T extends CourseEnrollmentFindManyArgs = {}>(args?: Subset<T, CourseEnrollmentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CourseEnrollment>>, PrismaPromise<Array<CourseEnrollmentGetPayload<T>>>>;

    tests<T extends TestFindManyArgs = {}>(args?: Subset<T, TestFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Test>>, PrismaPromise<Array<TestGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Course
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseInclude | null
    /**
     * Throw an Error if a Course can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Course to fetch.
    **/
    where: CourseWhereUniqueInput
  }


  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Course
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseInclude | null
    /**
     * Throw an Error if a Course can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Course to fetch.
    **/
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
    **/
    orderBy?: Enumerable<CourseOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
    **/
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
    **/
    distinct?: Enumerable<CourseScalarFieldEnum>
  }


  /**
   * Course findMany
   */
  export type CourseFindManyArgs = {
    /**
     * Select specific fields to fetch from the Course
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseInclude | null
    /**
     * Filter, which Courses to fetch.
    **/
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
    **/
    orderBy?: Enumerable<CourseOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
    **/
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
    **/
    skip?: number
    distinct?: Enumerable<CourseScalarFieldEnum>
  }


  /**
   * Course create
   */
  export type CourseCreateArgs = {
    /**
     * Select specific fields to fetch from the Course
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseInclude | null
    /**
     * The data needed to create a Course.
    **/
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }


  /**
   * Course createMany
   */
  export type CourseCreateManyArgs = {
    data: Enumerable<CourseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Course update
   */
  export type CourseUpdateArgs = {
    /**
     * Select specific fields to fetch from the Course
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseInclude | null
    /**
     * The data needed to update a Course.
    **/
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
    **/
    where: CourseWhereUniqueInput
  }


  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs = {
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    where?: CourseWhereInput
  }


  /**
   * Course upsert
   */
  export type CourseUpsertArgs = {
    /**
     * Select specific fields to fetch from the Course
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseInclude | null
    /**
     * The filter to search for the Course to update in case it exists.
    **/
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
    **/
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }


  /**
   * Course delete
   */
  export type CourseDeleteArgs = {
    /**
     * Select specific fields to fetch from the Course
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseInclude | null
    /**
     * Filter which Course to delete.
    **/
    where: CourseWhereUniqueInput
  }


  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs = {
    where?: CourseWhereInput
  }


  /**
   * Course without action
   */
  export type CourseArgs = {
    /**
     * Select specific fields to fetch from the Course
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseInclude | null
  }



  /**
   * Model CourseEnrollment
   */


  export type AggregateCourseEnrollment = {
    count: CourseEnrollmentCountAggregateOutputType | null
    avg: CourseEnrollmentAvgAggregateOutputType | null
    sum: CourseEnrollmentSumAggregateOutputType | null
    min: CourseEnrollmentMinAggregateOutputType | null
    max: CourseEnrollmentMaxAggregateOutputType | null
  }

  export type CourseEnrollmentAvgAggregateOutputType = {
    userId: number
    courseId: number
  }

  export type CourseEnrollmentSumAggregateOutputType = {
    userId: number
    courseId: number
  }

  export type CourseEnrollmentMinAggregateOutputType = {
    createdAt: Date | null
    role: UserRole | null
    userId: number
    courseId: number
  }

  export type CourseEnrollmentMaxAggregateOutputType = {
    createdAt: Date | null
    role: UserRole | null
    userId: number
    courseId: number
  }

  export type CourseEnrollmentCountAggregateOutputType = {
    createdAt: number | null
    role: number | null
    userId: number
    courseId: number
    _all: number
  }


  export type CourseEnrollmentAvgAggregateInputType = {
    userId?: true
    courseId?: true
  }

  export type CourseEnrollmentSumAggregateInputType = {
    userId?: true
    courseId?: true
  }

  export type CourseEnrollmentMinAggregateInputType = {
    createdAt?: true
    role?: true
    userId?: true
    courseId?: true
  }

  export type CourseEnrollmentMaxAggregateInputType = {
    createdAt?: true
    role?: true
    userId?: true
    courseId?: true
  }

  export type CourseEnrollmentCountAggregateInputType = {
    createdAt?: true
    role?: true
    userId?: true
    courseId?: true
    _all?: true
  }

  export type CourseEnrollmentAggregateArgs = {
    /**
     * Filter which CourseEnrollment to aggregate.
    **/
    where?: CourseEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEnrollments to fetch.
    **/
    orderBy?: Enumerable<CourseEnrollmentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: CourseEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEnrollments from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEnrollments.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseEnrollments
    **/
    count?: true | CourseEnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: CourseEnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: CourseEnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: CourseEnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: CourseEnrollmentMaxAggregateInputType
  }

  export type GetCourseEnrollmentAggregateType<T extends CourseEnrollmentAggregateArgs> = {
    [P in keyof T & keyof AggregateCourseEnrollment]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseEnrollment[P]>
      : GetScalarType<T[P], AggregateCourseEnrollment[P]>
  }


    
    
  export type CourseEnrollmentGroupByArgs = {
    where?: CourseEnrollmentWhereInput
    orderBy?: Enumerable<CourseEnrollmentOrderByInput>
    by: Array<CourseEnrollmentScalarFieldEnum>
    having?: CourseEnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: CourseEnrollmentCountAggregateInputType | true
    avg?: CourseEnrollmentAvgAggregateInputType
    sum?: CourseEnrollmentSumAggregateInputType
    min?: CourseEnrollmentMinAggregateInputType
    max?: CourseEnrollmentMaxAggregateInputType
  }


  export type CourseEnrollmentGroupByOutputType = {
    createdAt: Date
    role: UserRole
    userId: number
    courseId: number
    count: CourseEnrollmentCountAggregateOutputType | null
    avg: CourseEnrollmentAvgAggregateOutputType | null
    sum: CourseEnrollmentSumAggregateOutputType | null
    min: CourseEnrollmentMinAggregateOutputType | null
    max: CourseEnrollmentMaxAggregateOutputType | null
  }

  type GetCourseEnrollmentGroupByPayload<T extends CourseEnrollmentGroupByArgs> = Promise<Array<
    PickArray<CourseEnrollmentGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof CourseEnrollmentGroupByOutputType))]: GetScalarType<T[P], CourseEnrollmentGroupByOutputType[P]>
    }
  >>
    

  export type CourseEnrollmentSelect = {
    createdAt?: boolean
    role?: boolean
    userId?: boolean
    user?: boolean | UserArgs
    courseId?: boolean
    course?: boolean | CourseArgs
  }

  export type CourseEnrollmentInclude = {
    user?: boolean | UserArgs
    course?: boolean | CourseArgs
  }

  export type CourseEnrollmentGetPayload<
    S extends boolean | null | undefined | CourseEnrollmentArgs,
    U = keyof S
      > = S extends true
        ? CourseEnrollment
    : S extends undefined
    ? never
    : S extends CourseEnrollmentArgs | CourseEnrollmentFindManyArgs
    ?'include' extends U
    ? CourseEnrollment  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> :
        P extends 'course'
        ? CourseGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CourseEnrollment ?CourseEnrollment [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> :
        P extends 'course'
        ? CourseGetPayload<S['select'][P]> : never
  } 
    : CourseEnrollment
  : CourseEnrollment


  type CourseEnrollmentCountArgs = Merge<
    Omit<CourseEnrollmentFindManyArgs, 'select' | 'include'> & {
      select?: CourseEnrollmentCountAggregateInputType | true
    }
  >

  export interface CourseEnrollmentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one CourseEnrollment that matches the filter.
     * @param {CourseEnrollmentFindUniqueArgs} args - Arguments to find a CourseEnrollment
     * @example
     * // Get one CourseEnrollment
     * const courseEnrollment = await prisma.courseEnrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseEnrollmentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CourseEnrollmentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CourseEnrollment'> extends True ? CheckSelect<T, Prisma__CourseEnrollmentClient<CourseEnrollment>, Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T>>> : CheckSelect<T, Prisma__CourseEnrollmentClient<CourseEnrollment | null >, Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T> | null >>

    /**
     * Find the first CourseEnrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollmentFindFirstArgs} args - Arguments to find a CourseEnrollment
     * @example
     * // Get one CourseEnrollment
     * const courseEnrollment = await prisma.courseEnrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseEnrollmentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CourseEnrollmentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CourseEnrollment'> extends True ? CheckSelect<T, Prisma__CourseEnrollmentClient<CourseEnrollment>, Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T>>> : CheckSelect<T, Prisma__CourseEnrollmentClient<CourseEnrollment | null >, Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T> | null >>

    /**
     * Find zero or more CourseEnrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseEnrollments
     * const courseEnrollments = await prisma.courseEnrollment.findMany()
     * 
     * // Get first 10 CourseEnrollments
     * const courseEnrollments = await prisma.courseEnrollment.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const courseEnrollmentWithCreatedAtOnly = await prisma.courseEnrollment.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends CourseEnrollmentFindManyArgs>(
      args?: SelectSubset<T, CourseEnrollmentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<CourseEnrollment>>, PrismaPromise<Array<CourseEnrollmentGetPayload<T>>>>

    /**
     * Create a CourseEnrollment.
     * @param {CourseEnrollmentCreateArgs} args - Arguments to create a CourseEnrollment.
     * @example
     * // Create one CourseEnrollment
     * const CourseEnrollment = await prisma.courseEnrollment.create({
     *   data: {
     *     // ... data to create a CourseEnrollment
     *   }
     * })
     * 
    **/
    create<T extends CourseEnrollmentCreateArgs>(
      args: SelectSubset<T, CourseEnrollmentCreateArgs>
    ): CheckSelect<T, Prisma__CourseEnrollmentClient<CourseEnrollment>, Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T>>>

    /**
     * Create many CourseEnrollments.
     *     @param {CourseEnrollmentCreateManyArgs} args - Arguments to create many CourseEnrollments.
     *     @example
     *     // Create many CourseEnrollments
     *     const courseEnrollment = await prisma.courseEnrollment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseEnrollmentCreateManyArgs>(
      args?: SelectSubset<T, CourseEnrollmentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CourseEnrollment.
     * @param {CourseEnrollmentDeleteArgs} args - Arguments to delete one CourseEnrollment.
     * @example
     * // Delete one CourseEnrollment
     * const CourseEnrollment = await prisma.courseEnrollment.delete({
     *   where: {
     *     // ... filter to delete one CourseEnrollment
     *   }
     * })
     * 
    **/
    delete<T extends CourseEnrollmentDeleteArgs>(
      args: SelectSubset<T, CourseEnrollmentDeleteArgs>
    ): CheckSelect<T, Prisma__CourseEnrollmentClient<CourseEnrollment>, Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T>>>

    /**
     * Update one CourseEnrollment.
     * @param {CourseEnrollmentUpdateArgs} args - Arguments to update one CourseEnrollment.
     * @example
     * // Update one CourseEnrollment
     * const courseEnrollment = await prisma.courseEnrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseEnrollmentUpdateArgs>(
      args: SelectSubset<T, CourseEnrollmentUpdateArgs>
    ): CheckSelect<T, Prisma__CourseEnrollmentClient<CourseEnrollment>, Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T>>>

    /**
     * Delete zero or more CourseEnrollments.
     * @param {CourseEnrollmentDeleteManyArgs} args - Arguments to filter CourseEnrollments to delete.
     * @example
     * // Delete a few CourseEnrollments
     * const { count } = await prisma.courseEnrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseEnrollmentDeleteManyArgs>(
      args?: SelectSubset<T, CourseEnrollmentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseEnrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseEnrollments
     * const courseEnrollment = await prisma.courseEnrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseEnrollmentUpdateManyArgs>(
      args: SelectSubset<T, CourseEnrollmentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseEnrollment.
     * @param {CourseEnrollmentUpsertArgs} args - Arguments to update or create a CourseEnrollment.
     * @example
     * // Update or create a CourseEnrollment
     * const courseEnrollment = await prisma.courseEnrollment.upsert({
     *   create: {
     *     // ... data to create a CourseEnrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseEnrollment we want to update
     *   }
     * })
    **/
    upsert<T extends CourseEnrollmentUpsertArgs>(
      args: SelectSubset<T, CourseEnrollmentUpsertArgs>
    ): CheckSelect<T, Prisma__CourseEnrollmentClient<CourseEnrollment>, Prisma__CourseEnrollmentClient<CourseEnrollmentGetPayload<T>>>

    /**
     * Count the number of CourseEnrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollmentCountArgs} args - Arguments to filter CourseEnrollments to count.
     * @example
     * // Count the number of CourseEnrollments
     * const count = await prisma.courseEnrollment.count({
     *   where: {
     *     // ... the filter for the CourseEnrollments we want to count
     *   }
     * })
    **/
    count<T extends CourseEnrollmentCountArgs>(
      args?: Subset<T, CourseEnrollmentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseEnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseEnrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseEnrollmentAggregateArgs>(args: Subset<T, CourseEnrollmentAggregateArgs>): PrismaPromise<GetCourseEnrollmentAggregateType<T>>

    /**
     * Group by CourseEnrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseEnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseEnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: CourseEnrollmentGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseEnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseEnrollmentGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseEnrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CourseEnrollmentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    course<T extends CourseArgs = {}>(args?: Subset<T, CourseArgs>): CheckSelect<T, Prisma__CourseClient<Course | null >, Prisma__CourseClient<CourseGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * CourseEnrollment findUnique
   */
  export type CourseEnrollmentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
    **/
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseEnrollmentInclude | null
    /**
     * Throw an Error if a CourseEnrollment can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CourseEnrollment to fetch.
    **/
    where: CourseEnrollmentWhereUniqueInput
  }


  /**
   * CourseEnrollment findFirst
   */
  export type CourseEnrollmentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
    **/
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseEnrollmentInclude | null
    /**
     * Throw an Error if a CourseEnrollment can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CourseEnrollment to fetch.
    **/
    where?: CourseEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEnrollments to fetch.
    **/
    orderBy?: Enumerable<CourseEnrollmentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseEnrollments.
    **/
    cursor?: CourseEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEnrollments from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEnrollments.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseEnrollments.
    **/
    distinct?: Enumerable<CourseEnrollmentScalarFieldEnum>
  }


  /**
   * CourseEnrollment findMany
   */
  export type CourseEnrollmentFindManyArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
    **/
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseEnrollmentInclude | null
    /**
     * Filter, which CourseEnrollments to fetch.
    **/
    where?: CourseEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEnrollments to fetch.
    **/
    orderBy?: Enumerable<CourseEnrollmentOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseEnrollments.
    **/
    cursor?: CourseEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEnrollments from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEnrollments.
    **/
    skip?: number
    distinct?: Enumerable<CourseEnrollmentScalarFieldEnum>
  }


  /**
   * CourseEnrollment create
   */
  export type CourseEnrollmentCreateArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
    **/
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseEnrollmentInclude | null
    /**
     * The data needed to create a CourseEnrollment.
    **/
    data: XOR<CourseEnrollmentCreateInput, CourseEnrollmentUncheckedCreateInput>
  }


  /**
   * CourseEnrollment createMany
   */
  export type CourseEnrollmentCreateManyArgs = {
    data: Enumerable<CourseEnrollmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CourseEnrollment update
   */
  export type CourseEnrollmentUpdateArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
    **/
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseEnrollmentInclude | null
    /**
     * The data needed to update a CourseEnrollment.
    **/
    data: XOR<CourseEnrollmentUpdateInput, CourseEnrollmentUncheckedUpdateInput>
    /**
     * Choose, which CourseEnrollment to update.
    **/
    where: CourseEnrollmentWhereUniqueInput
  }


  /**
   * CourseEnrollment updateMany
   */
  export type CourseEnrollmentUpdateManyArgs = {
    data: XOR<CourseEnrollmentUpdateManyMutationInput, CourseEnrollmentUncheckedUpdateManyInput>
    where?: CourseEnrollmentWhereInput
  }


  /**
   * CourseEnrollment upsert
   */
  export type CourseEnrollmentUpsertArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
    **/
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseEnrollmentInclude | null
    /**
     * The filter to search for the CourseEnrollment to update in case it exists.
    **/
    where: CourseEnrollmentWhereUniqueInput
    /**
     * In case the CourseEnrollment found by the `where` argument doesn't exist, create a new CourseEnrollment with this data.
    **/
    create: XOR<CourseEnrollmentCreateInput, CourseEnrollmentUncheckedCreateInput>
    /**
     * In case the CourseEnrollment was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<CourseEnrollmentUpdateInput, CourseEnrollmentUncheckedUpdateInput>
  }


  /**
   * CourseEnrollment delete
   */
  export type CourseEnrollmentDeleteArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
    **/
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseEnrollmentInclude | null
    /**
     * Filter which CourseEnrollment to delete.
    **/
    where: CourseEnrollmentWhereUniqueInput
  }


  /**
   * CourseEnrollment deleteMany
   */
  export type CourseEnrollmentDeleteManyArgs = {
    where?: CourseEnrollmentWhereInput
  }


  /**
   * CourseEnrollment without action
   */
  export type CourseEnrollmentArgs = {
    /**
     * Select specific fields to fetch from the CourseEnrollment
    **/
    select?: CourseEnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CourseEnrollmentInclude | null
  }



  /**
   * Model Test
   */


  export type AggregateTest = {
    count: TestCountAggregateOutputType | null
    avg: TestAvgAggregateOutputType | null
    sum: TestSumAggregateOutputType | null
    min: TestMinAggregateOutputType | null
    max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    id: number
    courseId: number
  }

  export type TestSumAggregateOutputType = {
    id: number
    courseId: number
  }

  export type TestMinAggregateOutputType = {
    id: number
    updatedAt: Date | null
    name: string | null
    date: Date | null
    courseId: number
  }

  export type TestMaxAggregateOutputType = {
    id: number
    updatedAt: Date | null
    name: string | null
    date: Date | null
    courseId: number
  }

  export type TestCountAggregateOutputType = {
    id: number
    updatedAt: number | null
    name: number | null
    date: number | null
    courseId: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type TestSumAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    updatedAt?: true
    name?: true
    date?: true
    courseId?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    updatedAt?: true
    name?: true
    date?: true
    courseId?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    updatedAt?: true
    name?: true
    date?: true
    courseId?: true
    _all?: true
  }

  export type TestAggregateArgs = {
    /**
     * Filter which Test to aggregate.
    **/
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
    **/
    orderBy?: Enumerable<TestOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
    [P in keyof T & keyof AggregateTest]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }


    
    
  export type TestGroupByArgs = {
    where?: TestWhereInput
    orderBy?: Enumerable<TestOrderByInput>
    by: Array<TestScalarFieldEnum>
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: TestCountAggregateInputType | true
    avg?: TestAvgAggregateInputType
    sum?: TestSumAggregateInputType
    min?: TestMinAggregateInputType
    max?: TestMaxAggregateInputType
  }


  export type TestGroupByOutputType = {
    id: number
    updatedAt: Date
    name: string
    date: Date
    courseId: number
    count: TestCountAggregateOutputType | null
    avg: TestAvgAggregateOutputType | null
    sum: TestSumAggregateOutputType | null
    min: TestMinAggregateOutputType | null
    max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Promise<Array<
    PickArray<TestGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof TestGroupByOutputType))]: GetScalarType<T[P], TestGroupByOutputType[P]>
    }
  >>
    

  export type TestSelect = {
    id?: boolean
    updatedAt?: boolean
    name?: boolean
    date?: boolean
    courseId?: boolean
    course?: boolean | CourseArgs
    testResults?: boolean | TestResultFindManyArgs
  }

  export type TestInclude = {
    course?: boolean | CourseArgs
    testResults?: boolean | TestResultFindManyArgs
  }

  export type TestGetPayload<
    S extends boolean | null | undefined | TestArgs,
    U = keyof S
      > = S extends true
        ? Test
    : S extends undefined
    ? never
    : S extends TestArgs | TestFindManyArgs
    ?'include' extends U
    ? Test  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'course'
        ? CourseGetPayload<S['include'][P]> :
        P extends 'testResults'
        ? Array < TestResultGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Test ?Test [P]
  : 
          P extends 'course'
        ? CourseGetPayload<S['select'][P]> :
        P extends 'testResults'
        ? Array < TestResultGetPayload<S['select'][P]>>  : never
  } 
    : Test
  : Test


  type TestCountArgs = Merge<
    Omit<TestFindManyArgs, 'select' | 'include'> & {
      select?: TestCountAggregateInputType | true
    }
  >

  export interface TestDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Test'> extends True ? CheckSelect<T, Prisma__TestClient<Test>, Prisma__TestClient<TestGetPayload<T>>> : CheckSelect<T, Prisma__TestClient<Test | null >, Prisma__TestClient<TestGetPayload<T> | null >>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Test'> extends True ? CheckSelect<T, Prisma__TestClient<Test>, Prisma__TestClient<TestGetPayload<T>>> : CheckSelect<T, Prisma__TestClient<Test | null >, Prisma__TestClient<TestGetPayload<T> | null >>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestFindManyArgs>(
      args?: SelectSubset<T, TestFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Test>>, PrismaPromise<Array<TestGetPayload<T>>>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
    **/
    create<T extends TestCreateArgs>(
      args: SelectSubset<T, TestCreateArgs>
    ): CheckSelect<T, Prisma__TestClient<Test>, Prisma__TestClient<TestGetPayload<T>>>

    /**
     * Create many Tests.
     *     @param {TestCreateManyArgs} args - Arguments to create many Tests.
     *     @example
     *     // Create many Tests
     *     const test = await prisma.test.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TestCreateManyArgs>(
      args?: SelectSubset<T, TestCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
    **/
    delete<T extends TestDeleteArgs>(
      args: SelectSubset<T, TestDeleteArgs>
    ): CheckSelect<T, Prisma__TestClient<Test>, Prisma__TestClient<TestGetPayload<T>>>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestUpdateArgs>(
      args: SelectSubset<T, TestUpdateArgs>
    ): CheckSelect<T, Prisma__TestClient<Test>, Prisma__TestClient<TestGetPayload<T>>>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestDeleteManyArgs>(
      args?: SelectSubset<T, TestDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestUpdateManyArgs>(
      args: SelectSubset<T, TestUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
    **/
    upsert<T extends TestUpsertArgs>(
      args: SelectSubset<T, TestUpsertArgs>
    ): CheckSelect<T, Prisma__TestClient<Test>, Prisma__TestClient<TestGetPayload<T>>>

    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    course<T extends CourseArgs = {}>(args?: Subset<T, CourseArgs>): CheckSelect<T, Prisma__CourseClient<Course | null >, Prisma__CourseClient<CourseGetPayload<T> | null >>;

    testResults<T extends TestResultFindManyArgs = {}>(args?: Subset<T, TestResultFindManyArgs>): CheckSelect<T, PrismaPromise<Array<TestResult>>, PrismaPromise<Array<TestResultGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Test
    **/
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestInclude | null
    /**
     * Throw an Error if a Test can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Test to fetch.
    **/
    where: TestWhereUniqueInput
  }


  /**
   * Test findFirst
   */
  export type TestFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Test
    **/
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestInclude | null
    /**
     * Throw an Error if a Test can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Test to fetch.
    **/
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
    **/
    orderBy?: Enumerable<TestOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
    **/
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
    **/
    distinct?: Enumerable<TestScalarFieldEnum>
  }


  /**
   * Test findMany
   */
  export type TestFindManyArgs = {
    /**
     * Select specific fields to fetch from the Test
    **/
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestInclude | null
    /**
     * Filter, which Tests to fetch.
    **/
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
    **/
    orderBy?: Enumerable<TestOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
    **/
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
    **/
    skip?: number
    distinct?: Enumerable<TestScalarFieldEnum>
  }


  /**
   * Test create
   */
  export type TestCreateArgs = {
    /**
     * Select specific fields to fetch from the Test
    **/
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestInclude | null
    /**
     * The data needed to create a Test.
    **/
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }


  /**
   * Test createMany
   */
  export type TestCreateManyArgs = {
    data: Enumerable<TestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Test update
   */
  export type TestUpdateArgs = {
    /**
     * Select specific fields to fetch from the Test
    **/
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestInclude | null
    /**
     * The data needed to update a Test.
    **/
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
    **/
    where: TestWhereUniqueInput
  }


  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs = {
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    where?: TestWhereInput
  }


  /**
   * Test upsert
   */
  export type TestUpsertArgs = {
    /**
     * Select specific fields to fetch from the Test
    **/
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestInclude | null
    /**
     * The filter to search for the Test to update in case it exists.
    **/
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
    **/
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }


  /**
   * Test delete
   */
  export type TestDeleteArgs = {
    /**
     * Select specific fields to fetch from the Test
    **/
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestInclude | null
    /**
     * Filter which Test to delete.
    **/
    where: TestWhereUniqueInput
  }


  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs = {
    where?: TestWhereInput
  }


  /**
   * Test without action
   */
  export type TestArgs = {
    /**
     * Select specific fields to fetch from the Test
    **/
    select?: TestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestInclude | null
  }



  /**
   * Model TestResult
   */


  export type AggregateTestResult = {
    count: TestResultCountAggregateOutputType | null
    avg: TestResultAvgAggregateOutputType | null
    sum: TestResultSumAggregateOutputType | null
    min: TestResultMinAggregateOutputType | null
    max: TestResultMaxAggregateOutputType | null
  }

  export type TestResultAvgAggregateOutputType = {
    id: number
    result: number
    graderId: number
    studentId: number
    testId: number
  }

  export type TestResultSumAggregateOutputType = {
    id: number
    result: number
    graderId: number
    studentId: number
    testId: number
  }

  export type TestResultMinAggregateOutputType = {
    id: number
    createdAt: Date | null
    result: number
    graderId: number
    studentId: number
    testId: number
  }

  export type TestResultMaxAggregateOutputType = {
    id: number
    createdAt: Date | null
    result: number
    graderId: number
    studentId: number
    testId: number
  }

  export type TestResultCountAggregateOutputType = {
    id: number
    createdAt: number | null
    result: number
    graderId: number
    studentId: number
    testId: number
    _all: number
  }


  export type TestResultAvgAggregateInputType = {
    id?: true
    result?: true
    graderId?: true
    studentId?: true
    testId?: true
  }

  export type TestResultSumAggregateInputType = {
    id?: true
    result?: true
    graderId?: true
    studentId?: true
    testId?: true
  }

  export type TestResultMinAggregateInputType = {
    id?: true
    createdAt?: true
    result?: true
    graderId?: true
    studentId?: true
    testId?: true
  }

  export type TestResultMaxAggregateInputType = {
    id?: true
    createdAt?: true
    result?: true
    graderId?: true
    studentId?: true
    testId?: true
  }

  export type TestResultCountAggregateInputType = {
    id?: true
    createdAt?: true
    result?: true
    graderId?: true
    studentId?: true
    testId?: true
    _all?: true
  }

  export type TestResultAggregateArgs = {
    /**
     * Filter which TestResult to aggregate.
    **/
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
    **/
    orderBy?: Enumerable<TestResultOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestResults
    **/
    count?: true | TestResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: TestResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: TestResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: TestResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: TestResultMaxAggregateInputType
  }

  export type GetTestResultAggregateType<T extends TestResultAggregateArgs> = {
    [P in keyof T & keyof AggregateTestResult]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestResult[P]>
      : GetScalarType<T[P], AggregateTestResult[P]>
  }


    
    
  export type TestResultGroupByArgs = {
    where?: TestResultWhereInput
    orderBy?: Enumerable<TestResultOrderByInput>
    by: Array<TestResultScalarFieldEnum>
    having?: TestResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: TestResultCountAggregateInputType | true
    avg?: TestResultAvgAggregateInputType
    sum?: TestResultSumAggregateInputType
    min?: TestResultMinAggregateInputType
    max?: TestResultMaxAggregateInputType
  }


  export type TestResultGroupByOutputType = {
    id: number
    createdAt: Date
    result: number
    graderId: number
    studentId: number
    testId: number
    count: TestResultCountAggregateOutputType | null
    avg: TestResultAvgAggregateOutputType | null
    sum: TestResultSumAggregateOutputType | null
    min: TestResultMinAggregateOutputType | null
    max: TestResultMaxAggregateOutputType | null
  }

  type GetTestResultGroupByPayload<T extends TestResultGroupByArgs> = Promise<Array<
    PickArray<TestResultGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof TestResultGroupByOutputType))]: GetScalarType<T[P], TestResultGroupByOutputType[P]>
    }
  >>
    

  export type TestResultSelect = {
    id?: boolean
    createdAt?: boolean
    result?: boolean
    graderId?: boolean
    gradedBy?: boolean | UserArgs
    studentId?: boolean
    student?: boolean | UserArgs
    testId?: boolean
    test?: boolean | TestArgs
  }

  export type TestResultInclude = {
    gradedBy?: boolean | UserArgs
    student?: boolean | UserArgs
    test?: boolean | TestArgs
  }

  export type TestResultGetPayload<
    S extends boolean | null | undefined | TestResultArgs,
    U = keyof S
      > = S extends true
        ? TestResult
    : S extends undefined
    ? never
    : S extends TestResultArgs | TestResultFindManyArgs
    ?'include' extends U
    ? TestResult  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'gradedBy'
        ? UserGetPayload<S['include'][P]> :
        P extends 'student'
        ? UserGetPayload<S['include'][P]> :
        P extends 'test'
        ? TestGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof TestResult ?TestResult [P]
  : 
          P extends 'gradedBy'
        ? UserGetPayload<S['select'][P]> :
        P extends 'student'
        ? UserGetPayload<S['select'][P]> :
        P extends 'test'
        ? TestGetPayload<S['select'][P]> : never
  } 
    : TestResult
  : TestResult


  type TestResultCountArgs = Merge<
    Omit<TestResultFindManyArgs, 'select' | 'include'> & {
      select?: TestResultCountAggregateInputType | true
    }
  >

  export interface TestResultDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one TestResult that matches the filter.
     * @param {TestResultFindUniqueArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestResultFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TestResultFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TestResult'> extends True ? CheckSelect<T, Prisma__TestResultClient<TestResult>, Prisma__TestResultClient<TestResultGetPayload<T>>> : CheckSelect<T, Prisma__TestResultClient<TestResult | null >, Prisma__TestResultClient<TestResultGetPayload<T> | null >>

    /**
     * Find the first TestResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestResultFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TestResultFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TestResult'> extends True ? CheckSelect<T, Prisma__TestResultClient<TestResult>, Prisma__TestResultClient<TestResultGetPayload<T>>> : CheckSelect<T, Prisma__TestResultClient<TestResult | null >, Prisma__TestResultClient<TestResultGetPayload<T> | null >>

    /**
     * Find zero or more TestResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestResults
     * const testResults = await prisma.testResult.findMany()
     * 
     * // Get first 10 TestResults
     * const testResults = await prisma.testResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testResultWithIdOnly = await prisma.testResult.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestResultFindManyArgs>(
      args?: SelectSubset<T, TestResultFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<TestResult>>, PrismaPromise<Array<TestResultGetPayload<T>>>>

    /**
     * Create a TestResult.
     * @param {TestResultCreateArgs} args - Arguments to create a TestResult.
     * @example
     * // Create one TestResult
     * const TestResult = await prisma.testResult.create({
     *   data: {
     *     // ... data to create a TestResult
     *   }
     * })
     * 
    **/
    create<T extends TestResultCreateArgs>(
      args: SelectSubset<T, TestResultCreateArgs>
    ): CheckSelect<T, Prisma__TestResultClient<TestResult>, Prisma__TestResultClient<TestResultGetPayload<T>>>

    /**
     * Create many TestResults.
     *     @param {TestResultCreateManyArgs} args - Arguments to create many TestResults.
     *     @example
     *     // Create many TestResults
     *     const testResult = await prisma.testResult.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TestResultCreateManyArgs>(
      args?: SelectSubset<T, TestResultCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TestResult.
     * @param {TestResultDeleteArgs} args - Arguments to delete one TestResult.
     * @example
     * // Delete one TestResult
     * const TestResult = await prisma.testResult.delete({
     *   where: {
     *     // ... filter to delete one TestResult
     *   }
     * })
     * 
    **/
    delete<T extends TestResultDeleteArgs>(
      args: SelectSubset<T, TestResultDeleteArgs>
    ): CheckSelect<T, Prisma__TestResultClient<TestResult>, Prisma__TestResultClient<TestResultGetPayload<T>>>

    /**
     * Update one TestResult.
     * @param {TestResultUpdateArgs} args - Arguments to update one TestResult.
     * @example
     * // Update one TestResult
     * const testResult = await prisma.testResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestResultUpdateArgs>(
      args: SelectSubset<T, TestResultUpdateArgs>
    ): CheckSelect<T, Prisma__TestResultClient<TestResult>, Prisma__TestResultClient<TestResultGetPayload<T>>>

    /**
     * Delete zero or more TestResults.
     * @param {TestResultDeleteManyArgs} args - Arguments to filter TestResults to delete.
     * @example
     * // Delete a few TestResults
     * const { count } = await prisma.testResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestResultDeleteManyArgs>(
      args?: SelectSubset<T, TestResultDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestResults
     * const testResult = await prisma.testResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestResultUpdateManyArgs>(
      args: SelectSubset<T, TestResultUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TestResult.
     * @param {TestResultUpsertArgs} args - Arguments to update or create a TestResult.
     * @example
     * // Update or create a TestResult
     * const testResult = await prisma.testResult.upsert({
     *   create: {
     *     // ... data to create a TestResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestResult we want to update
     *   }
     * })
    **/
    upsert<T extends TestResultUpsertArgs>(
      args: SelectSubset<T, TestResultUpsertArgs>
    ): CheckSelect<T, Prisma__TestResultClient<TestResult>, Prisma__TestResultClient<TestResultGetPayload<T>>>

    /**
     * Count the number of TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultCountArgs} args - Arguments to filter TestResults to count.
     * @example
     * // Count the number of TestResults
     * const count = await prisma.testResult.count({
     *   where: {
     *     // ... the filter for the TestResults we want to count
     *   }
     * })
    **/
    count<T extends TestResultCountArgs>(
      args?: Subset<T, TestResultCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestResultAggregateArgs>(args: Subset<T, TestResultAggregateArgs>): PrismaPromise<GetTestResultAggregateType<T>>

    /**
     * Group by TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestResultGroupByArgs['orderBy'] }
        : { orderBy?: TestResultGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestResultGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestResultClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    gradedBy<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    student<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    test<T extends TestArgs = {}>(args?: Subset<T, TestArgs>): CheckSelect<T, Prisma__TestClient<Test | null >, Prisma__TestClient<TestGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * TestResult findUnique
   */
  export type TestResultFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the TestResult
    **/
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestResultInclude | null
    /**
     * Throw an Error if a TestResult can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TestResult to fetch.
    **/
    where: TestResultWhereUniqueInput
  }


  /**
   * TestResult findFirst
   */
  export type TestResultFindFirstArgs = {
    /**
     * Select specific fields to fetch from the TestResult
    **/
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestResultInclude | null
    /**
     * Throw an Error if a TestResult can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TestResult to fetch.
    **/
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
    **/
    orderBy?: Enumerable<TestResultOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
    **/
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
    **/
    distinct?: Enumerable<TestResultScalarFieldEnum>
  }


  /**
   * TestResult findMany
   */
  export type TestResultFindManyArgs = {
    /**
     * Select specific fields to fetch from the TestResult
    **/
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestResultInclude | null
    /**
     * Filter, which TestResults to fetch.
    **/
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
    **/
    orderBy?: Enumerable<TestResultOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestResults.
    **/
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
    **/
    skip?: number
    distinct?: Enumerable<TestResultScalarFieldEnum>
  }


  /**
   * TestResult create
   */
  export type TestResultCreateArgs = {
    /**
     * Select specific fields to fetch from the TestResult
    **/
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestResultInclude | null
    /**
     * The data needed to create a TestResult.
    **/
    data: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
  }


  /**
   * TestResult createMany
   */
  export type TestResultCreateManyArgs = {
    data: Enumerable<TestResultCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TestResult update
   */
  export type TestResultUpdateArgs = {
    /**
     * Select specific fields to fetch from the TestResult
    **/
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestResultInclude | null
    /**
     * The data needed to update a TestResult.
    **/
    data: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
    /**
     * Choose, which TestResult to update.
    **/
    where: TestResultWhereUniqueInput
  }


  /**
   * TestResult updateMany
   */
  export type TestResultUpdateManyArgs = {
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyInput>
    where?: TestResultWhereInput
  }


  /**
   * TestResult upsert
   */
  export type TestResultUpsertArgs = {
    /**
     * Select specific fields to fetch from the TestResult
    **/
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestResultInclude | null
    /**
     * The filter to search for the TestResult to update in case it exists.
    **/
    where: TestResultWhereUniqueInput
    /**
     * In case the TestResult found by the `where` argument doesn't exist, create a new TestResult with this data.
    **/
    create: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
    /**
     * In case the TestResult was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
  }


  /**
   * TestResult delete
   */
  export type TestResultDeleteArgs = {
    /**
     * Select specific fields to fetch from the TestResult
    **/
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestResultInclude | null
    /**
     * Filter which TestResult to delete.
    **/
    where: TestResultWhereUniqueInput
  }


  /**
   * TestResult deleteMany
   */
  export type TestResultDeleteManyArgs = {
    where?: TestResultWhereInput
  }


  /**
   * TestResult without action
   */
  export type TestResultArgs = {
    /**
     * Select specific fields to fetch from the TestResult
    **/
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TestResultInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    social: 'social'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    courseDetails: 'courseDetails'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseEnrollmentScalarFieldEnum: {
    createdAt: 'createdAt',
    role: 'role',
    userId: 'userId',
    courseId: 'courseId'
  };

  export type CourseEnrollmentScalarFieldEnum = (typeof CourseEnrollmentScalarFieldEnum)[keyof typeof CourseEnrollmentScalarFieldEnum]


  export const TestScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt',
    name: 'name',
    date: 'date',
    courseId: 'courseId'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const TestResultScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    result: 'result',
    graderId: 'graderId',
    studentId: 'studentId',
    testId: 'testId'
  };

  export type TestResultScalarFieldEnum = (typeof TestResultScalarFieldEnum)[keyof typeof TestResultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    updatedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    social?: JsonNullableFilter
    courses?: CourseEnrollmentListRelationFilter
    TestResults?: TestResultListRelationFilter
    TestsGraded?: TestResultListRelationFilter
  }

  export type UserOrderByInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    social?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    social?: JsonNullableWithAggregatesFilter
  }

  export type CourseWhereInput = {
    AND?: Enumerable<CourseWhereInput>
    OR?: Enumerable<CourseWhereInput>
    NOT?: Enumerable<CourseWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    courseDetails?: StringFilter | string
    members?: CourseEnrollmentListRelationFilter
    tests?: TestListRelationFilter
  }

  export type CourseOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    courseDetails?: SortOrder
  }

  export type CourseWhereUniqueInput = {
    id?: number
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CourseScalarWhereWithAggregatesInput>
    OR?: Enumerable<CourseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CourseScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    courseDetails?: StringWithAggregatesFilter | string
  }

  export type CourseEnrollmentWhereInput = {
    AND?: Enumerable<CourseEnrollmentWhereInput>
    OR?: Enumerable<CourseEnrollmentWhereInput>
    NOT?: Enumerable<CourseEnrollmentWhereInput>
    createdAt?: DateTimeFilter | Date | string
    role?: EnumUserRoleFilter | UserRole
    userId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    courseId?: IntFilter | number
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }

  export type CourseEnrollmentOrderByInput = {
    createdAt?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type CourseEnrollmentWhereUniqueInput = {
    userId_courseId_role?: CourseEnrollmentUserIdCourseIdRoleCompoundUniqueInput
  }

  export type CourseEnrollmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CourseEnrollmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CourseEnrollmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CourseEnrollmentScalarWhereWithAggregatesInput>
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    role?: EnumUserRoleWithAggregatesFilter | UserRole
    userId?: IntWithAggregatesFilter | number
    courseId?: IntWithAggregatesFilter | number
  }

  export type TestWhereInput = {
    AND?: Enumerable<TestWhereInput>
    OR?: Enumerable<TestWhereInput>
    NOT?: Enumerable<TestWhereInput>
    id?: IntFilter | number
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    date?: DateTimeFilter | Date | string
    courseId?: IntFilter | number
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    testResults?: TestResultListRelationFilter
  }

  export type TestOrderByInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    date?: SortOrder
    courseId?: SortOrder
  }

  export type TestWhereUniqueInput = {
    id?: number
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TestScalarWhereWithAggregatesInput>
    OR?: Enumerable<TestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TestScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    courseId?: IntWithAggregatesFilter | number
  }

  export type TestResultWhereInput = {
    AND?: Enumerable<TestResultWhereInput>
    OR?: Enumerable<TestResultWhereInput>
    NOT?: Enumerable<TestResultWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    result?: IntFilter | number
    graderId?: IntFilter | number
    gradedBy?: XOR<UserRelationFilter, UserWhereInput>
    studentId?: IntFilter | number
    student?: XOR<UserRelationFilter, UserWhereInput>
    testId?: IntFilter | number
    test?: XOR<TestRelationFilter, TestWhereInput>
  }

  export type TestResultOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    result?: SortOrder
    graderId?: SortOrder
    studentId?: SortOrder
    testId?: SortOrder
  }

  export type TestResultWhereUniqueInput = {
    id?: number
  }

  export type TestResultScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TestResultScalarWhereWithAggregatesInput>
    OR?: Enumerable<TestResultScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TestResultScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    result?: IntWithAggregatesFilter | number
    graderId?: IntWithAggregatesFilter | number
    studentId?: IntWithAggregatesFilter | number
    testId?: IntWithAggregatesFilter | number
  }

  export type UserCreateInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    email: string
    firstName: string
    lastName: string
    social?: InputJsonValue | null
    courses?: CourseEnrollmentCreateNestedManyWithoutUserInput
    TestResults?: TestResultCreateNestedManyWithoutStudentInput
    TestsGraded?: TestResultCreateNestedManyWithoutGradedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    email: string
    firstName: string
    lastName: string
    social?: InputJsonValue | null
    courses?: CourseEnrollmentUncheckedCreateNestedManyWithoutUserInput
    TestResults?: TestResultUncheckedCreateNestedManyWithoutStudentInput
    TestsGraded?: TestResultUncheckedCreateNestedManyWithoutGradedByInput
  }

  export type UserUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    social?: InputJsonValue | null
    courses?: CourseEnrollmentUpdateManyWithoutUserInput
    TestResults?: TestResultUpdateManyWithoutStudentInput
    TestsGraded?: TestResultUpdateManyWithoutGradedByInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    social?: InputJsonValue | null
    courses?: CourseEnrollmentUncheckedUpdateManyWithoutUserInput
    TestResults?: TestResultUncheckedUpdateManyWithoutStudentInput
    TestsGraded?: TestResultUncheckedUpdateManyWithoutGradedByInput
  }

  export type UserCreateManyInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    email: string
    firstName: string
    lastName: string
    social?: InputJsonValue | null
  }

  export type UserUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    social?: InputJsonValue | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    social?: InputJsonValue | null
  }

  export type CourseCreateInput = {
    name: string
    courseDetails: string
    members?: CourseEnrollmentCreateNestedManyWithoutCourseInput
    tests?: TestCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    name: string
    courseDetails: string
    members?: CourseEnrollmentUncheckedCreateNestedManyWithoutCourseInput
    tests?: TestUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    courseDetails?: StringFieldUpdateOperationsInput | string
    members?: CourseEnrollmentUpdateManyWithoutCourseInput
    tests?: TestUpdateManyWithoutCourseInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseDetails?: StringFieldUpdateOperationsInput | string
    members?: CourseEnrollmentUncheckedUpdateManyWithoutCourseInput
    tests?: TestUncheckedUpdateManyWithoutCourseInput
  }

  export type CourseCreateManyInput = {
    id?: number
    name: string
    courseDetails: string
  }

  export type CourseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    courseDetails?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseDetails?: StringFieldUpdateOperationsInput | string
  }

  export type CourseEnrollmentCreateInput = {
    createdAt?: Date | string
    role: UserRole
    user: UserCreateNestedOneWithoutCoursesInput
    course: CourseCreateNestedOneWithoutMembersInput
  }

  export type CourseEnrollmentUncheckedCreateInput = {
    createdAt?: Date | string
    role: UserRole
    userId: number
    courseId: number
  }

  export type CourseEnrollmentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    user?: UserUpdateOneRequiredWithoutCoursesInput
    course?: CourseUpdateOneRequiredWithoutMembersInput
  }

  export type CourseEnrollmentUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseEnrollmentCreateManyInput = {
    createdAt?: Date | string
    role: UserRole
    userId: number
    courseId: number
  }

  export type CourseEnrollmentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
  }

  export type CourseEnrollmentUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type TestCreateInput = {
    updatedAt?: Date | string
    name: string
    date: Date | string
    course: CourseCreateNestedOneWithoutTestsInput
    testResults?: TestResultCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateInput = {
    id?: number
    updatedAt?: Date | string
    name: string
    date: Date | string
    courseId: number
    testResults?: TestResultUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTestsInput
    testResults?: TestResultUpdateManyWithoutTestInput
  }

  export type TestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: IntFieldUpdateOperationsInput | number
    testResults?: TestResultUncheckedUpdateManyWithoutTestInput
  }

  export type TestCreateManyInput = {
    id?: number
    updatedAt?: Date | string
    name: string
    date: Date | string
    courseId: number
  }

  export type TestUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultCreateInput = {
    createdAt?: Date | string
    result: number
    gradedBy: UserCreateNestedOneWithoutTestsGradedInput
    student: UserCreateNestedOneWithoutTestResultsInput
    test: TestCreateNestedOneWithoutTestResultsInput
  }

  export type TestResultUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    result: number
    graderId: number
    studentId: number
    testId: number
  }

  export type TestResultUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: IntFieldUpdateOperationsInput | number
    gradedBy?: UserUpdateOneRequiredWithoutTestsGradedInput
    student?: UserUpdateOneRequiredWithoutTestResultsInput
    test?: TestUpdateOneRequiredWithoutTestResultsInput
  }

  export type TestResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: IntFieldUpdateOperationsInput | number
    graderId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultCreateManyInput = {
    id?: number
    createdAt?: Date | string
    result: number
    graderId: number
    studentId: number
    testId: number
  }

  export type TestResultUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: IntFieldUpdateOperationsInput | number
    graderId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type JsonNullableFilter = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
  }

  export type CourseEnrollmentListRelationFilter = {
    every?: CourseEnrollmentWhereInput
    some?: CourseEnrollmentWhereInput
    none?: CourseEnrollmentWhereInput
  }

  export type TestResultListRelationFilter = {
    every?: TestResultWhereInput
    some?: TestResultWhereInput
    none?: TestResultWhereInput
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    count?: NestedIntFilter
    avg?: NestedFloatFilter
    sum?: NestedIntFilter
    min?: NestedIntFilter
    max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    count?: NestedIntFilter
    min?: NestedDateTimeFilter
    max?: NestedDateTimeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    count?: NestedIntFilter
    min?: NestedStringFilter
    max?: NestedStringFilter
  }

  export type JsonNullableWithAggregatesFilter = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
    count?: NestedIntNullableFilter
    min?: NestedJsonNullableFilter
    max?: NestedJsonNullableFilter
  }

  export type TestListRelationFilter = {
    every?: TestWhereInput
    some?: TestWhereInput
    none?: TestWhereInput
  }

  export type EnumUserRoleFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleFilter | UserRole
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CourseRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type CourseEnrollmentUserIdCourseIdRoleCompoundUniqueInput = {
    userId: number
    courseId: number
    role: UserRole
  }

  export type EnumUserRoleWithAggregatesFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleWithAggregatesFilter | UserRole
    count?: NestedIntFilter
    min?: NestedEnumUserRoleFilter
    max?: NestedEnumUserRoleFilter
  }

  export type TestRelationFilter = {
    is?: TestWhereInput
    isNot?: TestWhereInput
  }

  export type CourseEnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutUserInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutUserInput>
    createMany?: CourseEnrollmentCreateManyUserInputEnvelope
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
  }

  export type TestResultCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutStudentInput>, Enumerable<TestResultUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutStudentInput>
    createMany?: TestResultCreateManyStudentInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
  }

  export type TestResultCreateNestedManyWithoutGradedByInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutGradedByInput>, Enumerable<TestResultUncheckedCreateWithoutGradedByInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutGradedByInput>
    createMany?: TestResultCreateManyGradedByInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
  }

  export type CourseEnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutUserInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutUserInput>
    createMany?: CourseEnrollmentCreateManyUserInputEnvelope
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
  }

  export type TestResultUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutStudentInput>, Enumerable<TestResultUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutStudentInput>
    createMany?: TestResultCreateManyStudentInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
  }

  export type TestResultUncheckedCreateNestedManyWithoutGradedByInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutGradedByInput>, Enumerable<TestResultUncheckedCreateWithoutGradedByInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutGradedByInput>
    createMany?: TestResultCreateManyGradedByInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CourseEnrollmentUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutUserInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CourseEnrollmentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CourseEnrollmentCreateManyUserInputEnvelope
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    set?: Enumerable<CourseEnrollmentWhereUniqueInput>
    disconnect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    delete?: Enumerable<CourseEnrollmentWhereUniqueInput>
    update?: Enumerable<CourseEnrollmentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CourseEnrollmentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CourseEnrollmentScalarWhereInput>
  }

  export type TestResultUpdateManyWithoutStudentInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutStudentInput>, Enumerable<TestResultUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<TestResultUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: TestResultCreateManyStudentInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
    set?: Enumerable<TestResultWhereUniqueInput>
    disconnect?: Enumerable<TestResultWhereUniqueInput>
    delete?: Enumerable<TestResultWhereUniqueInput>
    update?: Enumerable<TestResultUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<TestResultUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<TestResultScalarWhereInput>
  }

  export type TestResultUpdateManyWithoutGradedByInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutGradedByInput>, Enumerable<TestResultUncheckedCreateWithoutGradedByInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutGradedByInput>
    upsert?: Enumerable<TestResultUpsertWithWhereUniqueWithoutGradedByInput>
    createMany?: TestResultCreateManyGradedByInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
    set?: Enumerable<TestResultWhereUniqueInput>
    disconnect?: Enumerable<TestResultWhereUniqueInput>
    delete?: Enumerable<TestResultWhereUniqueInput>
    update?: Enumerable<TestResultUpdateWithWhereUniqueWithoutGradedByInput>
    updateMany?: Enumerable<TestResultUpdateManyWithWhereWithoutGradedByInput>
    deleteMany?: Enumerable<TestResultScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseEnrollmentUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutUserInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CourseEnrollmentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CourseEnrollmentCreateManyUserInputEnvelope
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    set?: Enumerable<CourseEnrollmentWhereUniqueInput>
    disconnect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    delete?: Enumerable<CourseEnrollmentWhereUniqueInput>
    update?: Enumerable<CourseEnrollmentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CourseEnrollmentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CourseEnrollmentScalarWhereInput>
  }

  export type TestResultUncheckedUpdateManyWithoutStudentInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutStudentInput>, Enumerable<TestResultUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<TestResultUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: TestResultCreateManyStudentInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
    set?: Enumerable<TestResultWhereUniqueInput>
    disconnect?: Enumerable<TestResultWhereUniqueInput>
    delete?: Enumerable<TestResultWhereUniqueInput>
    update?: Enumerable<TestResultUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<TestResultUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<TestResultScalarWhereInput>
  }

  export type TestResultUncheckedUpdateManyWithoutGradedByInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutGradedByInput>, Enumerable<TestResultUncheckedCreateWithoutGradedByInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutGradedByInput>
    upsert?: Enumerable<TestResultUpsertWithWhereUniqueWithoutGradedByInput>
    createMany?: TestResultCreateManyGradedByInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
    set?: Enumerable<TestResultWhereUniqueInput>
    disconnect?: Enumerable<TestResultWhereUniqueInput>
    delete?: Enumerable<TestResultWhereUniqueInput>
    update?: Enumerable<TestResultUpdateWithWhereUniqueWithoutGradedByInput>
    updateMany?: Enumerable<TestResultUpdateManyWithWhereWithoutGradedByInput>
    deleteMany?: Enumerable<TestResultScalarWhereInput>
  }

  export type CourseEnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutCourseInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutCourseInput>
    createMany?: CourseEnrollmentCreateManyCourseInputEnvelope
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
  }

  export type TestCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<TestCreateWithoutCourseInput>, Enumerable<TestUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<TestCreateOrConnectWithoutCourseInput>
    createMany?: TestCreateManyCourseInputEnvelope
    connect?: Enumerable<TestWhereUniqueInput>
  }

  export type CourseEnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutCourseInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutCourseInput>
    createMany?: CourseEnrollmentCreateManyCourseInputEnvelope
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
  }

  export type TestUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<TestCreateWithoutCourseInput>, Enumerable<TestUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<TestCreateOrConnectWithoutCourseInput>
    createMany?: TestCreateManyCourseInputEnvelope
    connect?: Enumerable<TestWhereUniqueInput>
  }

  export type CourseEnrollmentUpdateManyWithoutCourseInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutCourseInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<CourseEnrollmentUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: CourseEnrollmentCreateManyCourseInputEnvelope
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    set?: Enumerable<CourseEnrollmentWhereUniqueInput>
    disconnect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    delete?: Enumerable<CourseEnrollmentWhereUniqueInput>
    update?: Enumerable<CourseEnrollmentUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<CourseEnrollmentUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<CourseEnrollmentScalarWhereInput>
  }

  export type TestUpdateManyWithoutCourseInput = {
    create?: XOR<Enumerable<TestCreateWithoutCourseInput>, Enumerable<TestUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<TestCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<TestUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: TestCreateManyCourseInputEnvelope
    connect?: Enumerable<TestWhereUniqueInput>
    set?: Enumerable<TestWhereUniqueInput>
    disconnect?: Enumerable<TestWhereUniqueInput>
    delete?: Enumerable<TestWhereUniqueInput>
    update?: Enumerable<TestUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<TestUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<TestScalarWhereInput>
  }

  export type CourseEnrollmentUncheckedUpdateManyWithoutCourseInput = {
    create?: XOR<Enumerable<CourseEnrollmentCreateWithoutCourseInput>, Enumerable<CourseEnrollmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<CourseEnrollmentCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<CourseEnrollmentUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: CourseEnrollmentCreateManyCourseInputEnvelope
    connect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    set?: Enumerable<CourseEnrollmentWhereUniqueInput>
    disconnect?: Enumerable<CourseEnrollmentWhereUniqueInput>
    delete?: Enumerable<CourseEnrollmentWhereUniqueInput>
    update?: Enumerable<CourseEnrollmentUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<CourseEnrollmentUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<CourseEnrollmentScalarWhereInput>
  }

  export type TestUncheckedUpdateManyWithoutCourseInput = {
    create?: XOR<Enumerable<TestCreateWithoutCourseInput>, Enumerable<TestUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<TestCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<TestUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: TestCreateManyCourseInputEnvelope
    connect?: Enumerable<TestWhereUniqueInput>
    set?: Enumerable<TestWhereUniqueInput>
    disconnect?: Enumerable<TestWhereUniqueInput>
    delete?: Enumerable<TestWhereUniqueInput>
    update?: Enumerable<TestUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<TestUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<TestScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutCoursesInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutMembersInput = {
    create?: XOR<CourseCreateWithoutMembersInput, CourseUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutMembersInput
    connect?: CourseWhereUniqueInput
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: UserRole
  }

  export type UserUpdateOneRequiredWithoutCoursesInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    upsert?: UserUpsertWithoutCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseUpdateOneRequiredWithoutMembersInput = {
    create?: XOR<CourseCreateWithoutMembersInput, CourseUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutMembersInput
    upsert?: CourseUpsertWithoutMembersInput
    connect?: CourseWhereUniqueInput
    update?: XOR<CourseUpdateWithoutMembersInput, CourseUncheckedUpdateWithoutMembersInput>
  }

  export type CourseCreateNestedOneWithoutTestsInput = {
    create?: XOR<CourseCreateWithoutTestsInput, CourseUncheckedCreateWithoutTestsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTestsInput
    connect?: CourseWhereUniqueInput
  }

  export type TestResultCreateNestedManyWithoutTestInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutTestInput>, Enumerable<TestResultUncheckedCreateWithoutTestInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutTestInput>
    createMany?: TestResultCreateManyTestInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
  }

  export type TestResultUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutTestInput>, Enumerable<TestResultUncheckedCreateWithoutTestInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutTestInput>
    createMany?: TestResultCreateManyTestInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
  }

  export type CourseUpdateOneRequiredWithoutTestsInput = {
    create?: XOR<CourseCreateWithoutTestsInput, CourseUncheckedCreateWithoutTestsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTestsInput
    upsert?: CourseUpsertWithoutTestsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<CourseUpdateWithoutTestsInput, CourseUncheckedUpdateWithoutTestsInput>
  }

  export type TestResultUpdateManyWithoutTestInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutTestInput>, Enumerable<TestResultUncheckedCreateWithoutTestInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutTestInput>
    upsert?: Enumerable<TestResultUpsertWithWhereUniqueWithoutTestInput>
    createMany?: TestResultCreateManyTestInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
    set?: Enumerable<TestResultWhereUniqueInput>
    disconnect?: Enumerable<TestResultWhereUniqueInput>
    delete?: Enumerable<TestResultWhereUniqueInput>
    update?: Enumerable<TestResultUpdateWithWhereUniqueWithoutTestInput>
    updateMany?: Enumerable<TestResultUpdateManyWithWhereWithoutTestInput>
    deleteMany?: Enumerable<TestResultScalarWhereInput>
  }

  export type TestResultUncheckedUpdateManyWithoutTestInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutTestInput>, Enumerable<TestResultUncheckedCreateWithoutTestInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutTestInput>
    upsert?: Enumerable<TestResultUpsertWithWhereUniqueWithoutTestInput>
    createMany?: TestResultCreateManyTestInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
    set?: Enumerable<TestResultWhereUniqueInput>
    disconnect?: Enumerable<TestResultWhereUniqueInput>
    delete?: Enumerable<TestResultWhereUniqueInput>
    update?: Enumerable<TestResultUpdateWithWhereUniqueWithoutTestInput>
    updateMany?: Enumerable<TestResultUpdateManyWithWhereWithoutTestInput>
    deleteMany?: Enumerable<TestResultScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutTestsGradedInput = {
    create?: XOR<UserCreateWithoutTestsGradedInput, UserUncheckedCreateWithoutTestsGradedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestsGradedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTestResultsInput = {
    create?: XOR<UserCreateWithoutTestResultsInput, UserUncheckedCreateWithoutTestResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestResultsInput
    connect?: UserWhereUniqueInput
  }

  export type TestCreateNestedOneWithoutTestResultsInput = {
    create?: XOR<TestCreateWithoutTestResultsInput, TestUncheckedCreateWithoutTestResultsInput>
    connectOrCreate?: TestCreateOrConnectWithoutTestResultsInput
    connect?: TestWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTestsGradedInput = {
    create?: XOR<UserCreateWithoutTestsGradedInput, UserUncheckedCreateWithoutTestsGradedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestsGradedInput
    upsert?: UserUpsertWithoutTestsGradedInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTestsGradedInput, UserUncheckedUpdateWithoutTestsGradedInput>
  }

  export type UserUpdateOneRequiredWithoutTestResultsInput = {
    create?: XOR<UserCreateWithoutTestResultsInput, UserUncheckedCreateWithoutTestResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestResultsInput
    upsert?: UserUpsertWithoutTestResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTestResultsInput, UserUncheckedUpdateWithoutTestResultsInput>
  }

  export type TestUpdateOneRequiredWithoutTestResultsInput = {
    create?: XOR<TestCreateWithoutTestResultsInput, TestUncheckedCreateWithoutTestResultsInput>
    connectOrCreate?: TestCreateOrConnectWithoutTestResultsInput
    upsert?: TestUpsertWithoutTestResultsInput
    connect?: TestWhereUniqueInput
    update?: XOR<TestUpdateWithoutTestResultsInput, TestUncheckedUpdateWithoutTestResultsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    count?: NestedIntFilter
    avg?: NestedFloatFilter
    sum?: NestedIntFilter
    min?: NestedIntFilter
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    count?: NestedIntFilter
    min?: NestedDateTimeFilter
    max?: NestedDateTimeFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    count?: NestedIntFilter
    min?: NestedStringFilter
    max?: NestedStringFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedJsonNullableFilter = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
  }

  export type NestedEnumUserRoleFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleFilter | UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleWithAggregatesFilter | UserRole
    count?: NestedIntFilter
    min?: NestedEnumUserRoleFilter
    max?: NestedEnumUserRoleFilter
  }

  export type CourseEnrollmentCreateWithoutUserInput = {
    createdAt?: Date | string
    role: UserRole
    course: CourseCreateNestedOneWithoutMembersInput
  }

  export type CourseEnrollmentUncheckedCreateWithoutUserInput = {
    createdAt?: Date | string
    role: UserRole
    courseId: number
  }

  export type CourseEnrollmentCreateOrConnectWithoutUserInput = {
    where: CourseEnrollmentWhereUniqueInput
    create: XOR<CourseEnrollmentCreateWithoutUserInput, CourseEnrollmentUncheckedCreateWithoutUserInput>
  }

  export type CourseEnrollmentCreateManyUserInputEnvelope = {
    data: Enumerable<CourseEnrollmentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type TestResultCreateWithoutStudentInput = {
    createdAt?: Date | string
    result: number
    gradedBy: UserCreateNestedOneWithoutTestsGradedInput
    test: TestCreateNestedOneWithoutTestResultsInput
  }

  export type TestResultUncheckedCreateWithoutStudentInput = {
    id?: number
    createdAt?: Date | string
    result: number
    graderId: number
    testId: number
  }

  export type TestResultCreateOrConnectWithoutStudentInput = {
    where: TestResultWhereUniqueInput
    create: XOR<TestResultCreateWithoutStudentInput, TestResultUncheckedCreateWithoutStudentInput>
  }

  export type TestResultCreateManyStudentInputEnvelope = {
    data: Enumerable<TestResultCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type TestResultCreateWithoutGradedByInput = {
    createdAt?: Date | string
    result: number
    student: UserCreateNestedOneWithoutTestResultsInput
    test: TestCreateNestedOneWithoutTestResultsInput
  }

  export type TestResultUncheckedCreateWithoutGradedByInput = {
    id?: number
    createdAt?: Date | string
    result: number
    studentId: number
    testId: number
  }

  export type TestResultCreateOrConnectWithoutGradedByInput = {
    where: TestResultWhereUniqueInput
    create: XOR<TestResultCreateWithoutGradedByInput, TestResultUncheckedCreateWithoutGradedByInput>
  }

  export type TestResultCreateManyGradedByInputEnvelope = {
    data: Enumerable<TestResultCreateManyGradedByInput>
    skipDuplicates?: boolean
  }

  export type CourseEnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: CourseEnrollmentWhereUniqueInput
    update: XOR<CourseEnrollmentUpdateWithoutUserInput, CourseEnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<CourseEnrollmentCreateWithoutUserInput, CourseEnrollmentUncheckedCreateWithoutUserInput>
  }

  export type CourseEnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: CourseEnrollmentWhereUniqueInput
    data: XOR<CourseEnrollmentUpdateWithoutUserInput, CourseEnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type CourseEnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: CourseEnrollmentScalarWhereInput
    data: XOR<CourseEnrollmentUpdateManyMutationInput, CourseEnrollmentUncheckedUpdateManyWithoutCoursesInput>
  }

  export type CourseEnrollmentScalarWhereInput = {
    AND?: Enumerable<CourseEnrollmentScalarWhereInput>
    OR?: Enumerable<CourseEnrollmentScalarWhereInput>
    NOT?: Enumerable<CourseEnrollmentScalarWhereInput>
    createdAt?: DateTimeFilter | Date | string
    role?: EnumUserRoleFilter | UserRole
    userId?: IntFilter | number
    courseId?: IntFilter | number
  }

  export type TestResultUpsertWithWhereUniqueWithoutStudentInput = {
    where: TestResultWhereUniqueInput
    update: XOR<TestResultUpdateWithoutStudentInput, TestResultUncheckedUpdateWithoutStudentInput>
    create: XOR<TestResultCreateWithoutStudentInput, TestResultUncheckedCreateWithoutStudentInput>
  }

  export type TestResultUpdateWithWhereUniqueWithoutStudentInput = {
    where: TestResultWhereUniqueInput
    data: XOR<TestResultUpdateWithoutStudentInput, TestResultUncheckedUpdateWithoutStudentInput>
  }

  export type TestResultUpdateManyWithWhereWithoutStudentInput = {
    where: TestResultScalarWhereInput
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyWithoutTestResultsInput>
  }

  export type TestResultScalarWhereInput = {
    AND?: Enumerable<TestResultScalarWhereInput>
    OR?: Enumerable<TestResultScalarWhereInput>
    NOT?: Enumerable<TestResultScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    result?: IntFilter | number
    graderId?: IntFilter | number
    studentId?: IntFilter | number
    testId?: IntFilter | number
  }

  export type TestResultUpsertWithWhereUniqueWithoutGradedByInput = {
    where: TestResultWhereUniqueInput
    update: XOR<TestResultUpdateWithoutGradedByInput, TestResultUncheckedUpdateWithoutGradedByInput>
    create: XOR<TestResultCreateWithoutGradedByInput, TestResultUncheckedCreateWithoutGradedByInput>
  }

  export type TestResultUpdateWithWhereUniqueWithoutGradedByInput = {
    where: TestResultWhereUniqueInput
    data: XOR<TestResultUpdateWithoutGradedByInput, TestResultUncheckedUpdateWithoutGradedByInput>
  }

  export type TestResultUpdateManyWithWhereWithoutGradedByInput = {
    where: TestResultScalarWhereInput
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyWithoutTestsGradedInput>
  }

  export type CourseEnrollmentCreateWithoutCourseInput = {
    createdAt?: Date | string
    role: UserRole
    user: UserCreateNestedOneWithoutCoursesInput
  }

  export type CourseEnrollmentUncheckedCreateWithoutCourseInput = {
    createdAt?: Date | string
    role: UserRole
    userId: number
  }

  export type CourseEnrollmentCreateOrConnectWithoutCourseInput = {
    where: CourseEnrollmentWhereUniqueInput
    create: XOR<CourseEnrollmentCreateWithoutCourseInput, CourseEnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type CourseEnrollmentCreateManyCourseInputEnvelope = {
    data: Enumerable<CourseEnrollmentCreateManyCourseInput>
    skipDuplicates?: boolean
  }

  export type TestCreateWithoutCourseInput = {
    updatedAt?: Date | string
    name: string
    date: Date | string
    testResults?: TestResultCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutCourseInput = {
    id?: number
    updatedAt?: Date | string
    name: string
    date: Date | string
    testResults?: TestResultUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutCourseInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutCourseInput, TestUncheckedCreateWithoutCourseInput>
  }

  export type TestCreateManyCourseInputEnvelope = {
    data: Enumerable<TestCreateManyCourseInput>
    skipDuplicates?: boolean
  }

  export type CourseEnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseEnrollmentWhereUniqueInput
    update: XOR<CourseEnrollmentUpdateWithoutCourseInput, CourseEnrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseEnrollmentCreateWithoutCourseInput, CourseEnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type CourseEnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseEnrollmentWhereUniqueInput
    data: XOR<CourseEnrollmentUpdateWithoutCourseInput, CourseEnrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type CourseEnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: CourseEnrollmentScalarWhereInput
    data: XOR<CourseEnrollmentUpdateManyMutationInput, CourseEnrollmentUncheckedUpdateManyWithoutMembersInput>
  }

  export type TestUpsertWithWhereUniqueWithoutCourseInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutCourseInput, TestUncheckedUpdateWithoutCourseInput>
    create: XOR<TestCreateWithoutCourseInput, TestUncheckedCreateWithoutCourseInput>
  }

  export type TestUpdateWithWhereUniqueWithoutCourseInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutCourseInput, TestUncheckedUpdateWithoutCourseInput>
  }

  export type TestUpdateManyWithWhereWithoutCourseInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutTestsInput>
  }

  export type TestScalarWhereInput = {
    AND?: Enumerable<TestScalarWhereInput>
    OR?: Enumerable<TestScalarWhereInput>
    NOT?: Enumerable<TestScalarWhereInput>
    id?: IntFilter | number
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    date?: DateTimeFilter | Date | string
    courseId?: IntFilter | number
  }

  export type UserCreateWithoutCoursesInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    email: string
    firstName: string
    lastName: string
    social?: InputJsonValue | null
    TestResults?: TestResultCreateNestedManyWithoutStudentInput
    TestsGraded?: TestResultCreateNestedManyWithoutGradedByInput
  }

  export type UserUncheckedCreateWithoutCoursesInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    email: string
    firstName: string
    lastName: string
    social?: InputJsonValue | null
    TestResults?: TestResultUncheckedCreateNestedManyWithoutStudentInput
    TestsGraded?: TestResultUncheckedCreateNestedManyWithoutGradedByInput
  }

  export type UserCreateOrConnectWithoutCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type CourseCreateWithoutMembersInput = {
    name: string
    courseDetails: string
    tests?: TestCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    courseDetails: string
    tests?: TestUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutMembersInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutMembersInput, CourseUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutCoursesInput = {
    update: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type UserUpdateWithoutCoursesInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    social?: InputJsonValue | null
    TestResults?: TestResultUpdateManyWithoutStudentInput
    TestsGraded?: TestResultUpdateManyWithoutGradedByInput
  }

  export type UserUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    social?: InputJsonValue | null
    TestResults?: TestResultUncheckedUpdateManyWithoutStudentInput
    TestsGraded?: TestResultUncheckedUpdateManyWithoutGradedByInput
  }

  export type CourseUpsertWithoutMembersInput = {
    update: XOR<CourseUpdateWithoutMembersInput, CourseUncheckedUpdateWithoutMembersInput>
    create: XOR<CourseCreateWithoutMembersInput, CourseUncheckedCreateWithoutMembersInput>
  }

  export type CourseUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    courseDetails?: StringFieldUpdateOperationsInput | string
    tests?: TestUpdateManyWithoutCourseInput
  }

  export type CourseUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseDetails?: StringFieldUpdateOperationsInput | string
    tests?: TestUncheckedUpdateManyWithoutCourseInput
  }

  export type CourseCreateWithoutTestsInput = {
    name: string
    courseDetails: string
    members?: CourseEnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTestsInput = {
    id?: number
    name: string
    courseDetails: string
    members?: CourseEnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTestsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTestsInput, CourseUncheckedCreateWithoutTestsInput>
  }

  export type TestResultCreateWithoutTestInput = {
    createdAt?: Date | string
    result: number
    gradedBy: UserCreateNestedOneWithoutTestsGradedInput
    student: UserCreateNestedOneWithoutTestResultsInput
  }

  export type TestResultUncheckedCreateWithoutTestInput = {
    id?: number
    createdAt?: Date | string
    result: number
    graderId: number
    studentId: number
  }

  export type TestResultCreateOrConnectWithoutTestInput = {
    where: TestResultWhereUniqueInput
    create: XOR<TestResultCreateWithoutTestInput, TestResultUncheckedCreateWithoutTestInput>
  }

  export type TestResultCreateManyTestInputEnvelope = {
    data: Enumerable<TestResultCreateManyTestInput>
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutTestsInput = {
    update: XOR<CourseUpdateWithoutTestsInput, CourseUncheckedUpdateWithoutTestsInput>
    create: XOR<CourseCreateWithoutTestsInput, CourseUncheckedCreateWithoutTestsInput>
  }

  export type CourseUpdateWithoutTestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    courseDetails?: StringFieldUpdateOperationsInput | string
    members?: CourseEnrollmentUpdateManyWithoutCourseInput
  }

  export type CourseUncheckedUpdateWithoutTestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseDetails?: StringFieldUpdateOperationsInput | string
    members?: CourseEnrollmentUncheckedUpdateManyWithoutCourseInput
  }

  export type TestResultUpsertWithWhereUniqueWithoutTestInput = {
    where: TestResultWhereUniqueInput
    update: XOR<TestResultUpdateWithoutTestInput, TestResultUncheckedUpdateWithoutTestInput>
    create: XOR<TestResultCreateWithoutTestInput, TestResultUncheckedCreateWithoutTestInput>
  }

  export type TestResultUpdateWithWhereUniqueWithoutTestInput = {
    where: TestResultWhereUniqueInput
    data: XOR<TestResultUpdateWithoutTestInput, TestResultUncheckedUpdateWithoutTestInput>
  }

  export type TestResultUpdateManyWithWhereWithoutTestInput = {
    where: TestResultScalarWhereInput
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyWithoutTestResultsInput>
  }

  export type UserCreateWithoutTestsGradedInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    email: string
    firstName: string
    lastName: string
    social?: InputJsonValue | null
    courses?: CourseEnrollmentCreateNestedManyWithoutUserInput
    TestResults?: TestResultCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutTestsGradedInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    email: string
    firstName: string
    lastName: string
    social?: InputJsonValue | null
    courses?: CourseEnrollmentUncheckedCreateNestedManyWithoutUserInput
    TestResults?: TestResultUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutTestsGradedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestsGradedInput, UserUncheckedCreateWithoutTestsGradedInput>
  }

  export type UserCreateWithoutTestResultsInput = {
    updatedAt?: Date | string
    createdAt?: Date | string
    email: string
    firstName: string
    lastName: string
    social?: InputJsonValue | null
    courses?: CourseEnrollmentCreateNestedManyWithoutUserInput
    TestsGraded?: TestResultCreateNestedManyWithoutGradedByInput
  }

  export type UserUncheckedCreateWithoutTestResultsInput = {
    id?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    email: string
    firstName: string
    lastName: string
    social?: InputJsonValue | null
    courses?: CourseEnrollmentUncheckedCreateNestedManyWithoutUserInput
    TestsGraded?: TestResultUncheckedCreateNestedManyWithoutGradedByInput
  }

  export type UserCreateOrConnectWithoutTestResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestResultsInput, UserUncheckedCreateWithoutTestResultsInput>
  }

  export type TestCreateWithoutTestResultsInput = {
    updatedAt?: Date | string
    name: string
    date: Date | string
    course: CourseCreateNestedOneWithoutTestsInput
  }

  export type TestUncheckedCreateWithoutTestResultsInput = {
    id?: number
    updatedAt?: Date | string
    name: string
    date: Date | string
    courseId: number
  }

  export type TestCreateOrConnectWithoutTestResultsInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutTestResultsInput, TestUncheckedCreateWithoutTestResultsInput>
  }

  export type UserUpsertWithoutTestsGradedInput = {
    update: XOR<UserUpdateWithoutTestsGradedInput, UserUncheckedUpdateWithoutTestsGradedInput>
    create: XOR<UserCreateWithoutTestsGradedInput, UserUncheckedCreateWithoutTestsGradedInput>
  }

  export type UserUpdateWithoutTestsGradedInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    social?: InputJsonValue | null
    courses?: CourseEnrollmentUpdateManyWithoutUserInput
    TestResults?: TestResultUpdateManyWithoutStudentInput
  }

  export type UserUncheckedUpdateWithoutTestsGradedInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    social?: InputJsonValue | null
    courses?: CourseEnrollmentUncheckedUpdateManyWithoutUserInput
    TestResults?: TestResultUncheckedUpdateManyWithoutStudentInput
  }

  export type UserUpsertWithoutTestResultsInput = {
    update: XOR<UserUpdateWithoutTestResultsInput, UserUncheckedUpdateWithoutTestResultsInput>
    create: XOR<UserCreateWithoutTestResultsInput, UserUncheckedCreateWithoutTestResultsInput>
  }

  export type UserUpdateWithoutTestResultsInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    social?: InputJsonValue | null
    courses?: CourseEnrollmentUpdateManyWithoutUserInput
    TestsGraded?: TestResultUpdateManyWithoutGradedByInput
  }

  export type UserUncheckedUpdateWithoutTestResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    social?: InputJsonValue | null
    courses?: CourseEnrollmentUncheckedUpdateManyWithoutUserInput
    TestsGraded?: TestResultUncheckedUpdateManyWithoutGradedByInput
  }

  export type TestUpsertWithoutTestResultsInput = {
    update: XOR<TestUpdateWithoutTestResultsInput, TestUncheckedUpdateWithoutTestResultsInput>
    create: XOR<TestCreateWithoutTestResultsInput, TestUncheckedCreateWithoutTestResultsInput>
  }

  export type TestUpdateWithoutTestResultsInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTestsInput
  }

  export type TestUncheckedUpdateWithoutTestResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseEnrollmentCreateManyUserInput = {
    createdAt?: Date | string
    role: UserRole
    courseId: number
  }

  export type TestResultCreateManyStudentInput = {
    id?: number
    createdAt?: Date | string
    result: number
    graderId: number
    testId: number
  }

  export type TestResultCreateManyGradedByInput = {
    id?: number
    createdAt?: Date | string
    result: number
    studentId: number
    testId: number
  }

  export type CourseEnrollmentUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    course?: CourseUpdateOneRequiredWithoutMembersInput
  }

  export type CourseEnrollmentUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseEnrollmentUncheckedUpdateManyWithoutCoursesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultUpdateWithoutStudentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: IntFieldUpdateOperationsInput | number
    gradedBy?: UserUpdateOneRequiredWithoutTestsGradedInput
    test?: TestUpdateOneRequiredWithoutTestResultsInput
  }

  export type TestResultUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: IntFieldUpdateOperationsInput | number
    graderId?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultUncheckedUpdateManyWithoutTestResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: IntFieldUpdateOperationsInput | number
    graderId?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultUpdateWithoutGradedByInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: IntFieldUpdateOperationsInput | number
    student?: UserUpdateOneRequiredWithoutTestResultsInput
    test?: TestUpdateOneRequiredWithoutTestResultsInput
  }

  export type TestResultUncheckedUpdateWithoutGradedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
  }

  export type TestResultUncheckedUpdateManyWithoutTestsGradedInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseEnrollmentCreateManyCourseInput = {
    createdAt?: Date | string
    role: UserRole
    userId: number
  }

  export type TestCreateManyCourseInput = {
    id?: number
    updatedAt?: Date | string
    name: string
    date: Date | string
  }

  export type CourseEnrollmentUpdateWithoutCourseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    user?: UserUpdateOneRequiredWithoutCoursesInput
  }

  export type CourseEnrollmentUncheckedUpdateWithoutCourseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseEnrollmentUncheckedUpdateManyWithoutMembersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TestUpdateWithoutCourseInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    testResults?: TestResultUpdateManyWithoutTestInput
  }

  export type TestUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    testResults?: TestResultUncheckedUpdateManyWithoutTestInput
  }

  export type TestUncheckedUpdateManyWithoutTestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultCreateManyTestInput = {
    id?: number
    createdAt?: Date | string
    result: number
    graderId: number
    studentId: number
  }

  export type TestResultUpdateWithoutTestInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: IntFieldUpdateOperationsInput | number
    gradedBy?: UserUpdateOneRequiredWithoutTestsGradedInput
    student?: UserUpdateOneRequiredWithoutTestResultsInput
  }

  export type TestResultUncheckedUpdateWithoutTestInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: IntFieldUpdateOperationsInput | number
    graderId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}