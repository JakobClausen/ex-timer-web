import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  getUser: User;
  getWhiteboard: Array<Whiteboard>;
};


export type QueryGetUserArgs = {
  id: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  email: Scalars['String'];
  username: Scalars['String'];
  whiteboards: Array<Whiteboard>;
  schedule: Array<Schedule>;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Whiteboard = {
  __typename?: 'Whiteboard';
  id: Scalars['Float'];
  date: Scalars['String'];
  user_id: Scalars['Float'];
  user: User;
  workout: Array<Workout>;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Workout = {
  __typename?: 'Workout';
  id: Scalars['Float'];
  title: Scalars['String'];
  workout: Scalars['String'];
  category_id: Scalars['Float'];
  whiteboard_id: Scalars['Float'];
  whiteboard: Whiteboard;
  category: Category;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Float'];
  category: Scalars['String'];
  workouts: Array<Workout>;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Schedule = {
  __typename?: 'Schedule';
  id: Scalars['Float'];
  day: Scalars['String'];
  user_id: Scalars['Float'];
  user: User;
  gymClass: Array<GymClass>;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type GymClass = {
  __typename?: 'GymClass';
  id: Scalars['Float'];
  start_time: Scalars['String'];
  end_time: Scalars['String'];
  category_id: Scalars['Float'];
  schedule_id: Scalars['Float'];
  schedule: Schedule;
  category: Category;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  updateUser?: Maybe<UserResponse>;
  createWhiteboard: Scalars['Boolean'];
  createCategory: Category;
  createSchedule: Scalars['Boolean'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  data: RegistrationData;
};


export type MutationLoginArgs = {
  data: LoginData;
};


export type MutationUpdateUserArgs = {
  data: UpdateUser;
};


export type MutationCreateWhiteboardArgs = {
  data: DaysInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateScheduleArgs = {
  data: ScheduleClassInput;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type RegistrationData = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginData = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UpdateUser = {
  id: Scalars['Float'];
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type DaysInput = {
  Monday: WhiteboardInput;
  Tuseday: WhiteboardInput;
  Wednesday: WhiteboardInput;
  Thursday: WhiteboardInput;
  Friday: WhiteboardInput;
  Saturday: WhiteboardInput;
  Sunday: WhiteboardInput;
};

export type WhiteboardInput = {
  day: Scalars['String'];
  category: Scalars['Int'];
  one: RowField;
  two: RowField;
  three: RowField;
};

export type RowField = {
  title: Scalars['String'];
  workout: Scalars['String'];
};

export type CategoryInput = {
  category: Scalars['String'];
};

export type ScheduleClassInput = {
  Monday: ScheduleInput;
  Tuseday: ScheduleInput;
  Wednesday: ScheduleInput;
  Thursday: ScheduleInput;
  Friday: ScheduleInput;
  Saturday: ScheduleInput;
  Sunday: ScheduleInput;
};

export type ScheduleInput = {
  day: Scalars['String'];
  classes: Array<ClassInput>;
};

export type ClassInput = {
  start_time: Scalars['String'];
  end_time: Scalars['String'];
  category: Scalars['Float'];
};

export type Subscription = {
  __typename?: 'Subscription';
  subWhiteboard: SubscriptionData;
  subSchedule: ScheduleClassSub;
};

export type SubscriptionData = {
  __typename?: 'SubscriptionData';
  Monday: Two;
  Tuseday: Two;
  Wednesday: Two;
  Thursday: Two;
  Friday: Two;
  Saturday: Two;
  Sunday: Two;
};

export type Two = {
  __typename?: 'Two';
  day: Scalars['String'];
  category: Scalars['Int'];
  one: Three;
  two: Three;
  three: Three;
};

export type Three = {
  __typename?: 'Three';
  title: Scalars['String'];
  workout: Scalars['String'];
};

export type ScheduleClassSub = {
  __typename?: 'ScheduleClassSub';
  Monday: ScheduleSub;
  Tuseday: ScheduleSub;
  Wednesday: ScheduleSub;
  Thursday: ScheduleSub;
  Friday: ScheduleSub;
  Saturday: ScheduleSub;
  Sunday: ScheduleSub;
};

export type ScheduleSub = {
  __typename?: 'ScheduleSub';
  day: Scalars['String'];
  classes: Array<ClassSub>;
};

export type ClassSub = {
  __typename?: 'ClassSub';
  start_time: Scalars['String'];
  end_time: Scalars['String'];
  category: Scalars['Float'];
};

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'username'>
);

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type CreateWhiteboardMutationVariables = Exact<{
  data: DaysInput;
}>;


export type CreateWhiteboardMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createWhiteboard'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type SubWhiteboardSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubWhiteboardSubscription = (
  { __typename?: 'Subscription' }
  & { subWhiteboard: (
    { __typename?: 'SubscriptionData' }
    & { Monday: (
      { __typename?: 'Two' }
      & Pick<Two, 'day' | 'category'>
      & { one: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ), two: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ), three: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ) }
    ), Tuseday: (
      { __typename?: 'Two' }
      & Pick<Two, 'day' | 'category'>
      & { one: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ), two: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ), three: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ) }
    ), Wednesday: (
      { __typename?: 'Two' }
      & Pick<Two, 'day' | 'category'>
      & { one: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ), two: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ), three: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ) }
    ), Thursday: (
      { __typename?: 'Two' }
      & Pick<Two, 'day' | 'category'>
      & { one: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ), two: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ), three: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ) }
    ), Friday: (
      { __typename?: 'Two' }
      & Pick<Two, 'day' | 'category'>
      & { one: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ), two: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ), three: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ) }
    ), Saturday: (
      { __typename?: 'Two' }
      & Pick<Two, 'day' | 'category'>
      & { one: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ), two: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ), three: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ) }
    ), Sunday: (
      { __typename?: 'Two' }
      & Pick<Two, 'day' | 'category'>
      & { one: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ), two: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ), three: (
        { __typename?: 'Three' }
        & Pick<Three, 'title' | 'workout'>
      ) }
    ) }
  ) }
);

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  email
  username
}
    `;
export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    errors {
      ...RegularError
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateWhiteboardDocument = gql`
    mutation CreateWhiteboard($data: DaysInput!) {
  createWhiteboard(data: $data)
}
    `;
export type CreateWhiteboardMutationFn = Apollo.MutationFunction<CreateWhiteboardMutation, CreateWhiteboardMutationVariables>;

/**
 * __useCreateWhiteboardMutation__
 *
 * To run a mutation, you first call `useCreateWhiteboardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWhiteboardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWhiteboardMutation, { data, loading, error }] = useCreateWhiteboardMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateWhiteboardMutation(baseOptions?: Apollo.MutationHookOptions<CreateWhiteboardMutation, CreateWhiteboardMutationVariables>) {
        return Apollo.useMutation<CreateWhiteboardMutation, CreateWhiteboardMutationVariables>(CreateWhiteboardDocument, baseOptions);
      }
export type CreateWhiteboardMutationHookResult = ReturnType<typeof useCreateWhiteboardMutation>;
export type CreateWhiteboardMutationResult = Apollo.MutationResult<CreateWhiteboardMutation>;
export type CreateWhiteboardMutationOptions = Apollo.BaseMutationOptions<CreateWhiteboardMutation, CreateWhiteboardMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    errors {
      ...RegularError
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $username: String!, $password: String!) {
  register(data: {email: $email, username: $username, password: $password}) {
    errors {
      ...RegularError
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SubWhiteboardDocument = gql`
    subscription SubWhiteboard {
  subWhiteboard {
    Monday {
      day
      category
      one {
        title
        workout
      }
      two {
        title
        workout
      }
      three {
        title
        workout
      }
    }
    Tuseday {
      day
      category
      one {
        title
        workout
      }
      two {
        title
        workout
      }
      three {
        title
        workout
      }
    }
    Wednesday {
      day
      category
      one {
        title
        workout
      }
      two {
        title
        workout
      }
      three {
        title
        workout
      }
    }
    Thursday {
      day
      category
      one {
        title
        workout
      }
      two {
        title
        workout
      }
      three {
        title
        workout
      }
    }
    Friday {
      day
      category
      one {
        title
        workout
      }
      two {
        title
        workout
      }
      three {
        title
        workout
      }
    }
    Saturday {
      day
      category
      one {
        title
        workout
      }
      two {
        title
        workout
      }
      three {
        title
        workout
      }
    }
    Sunday {
      day
      category
      one {
        title
        workout
      }
      two {
        title
        workout
      }
      three {
        title
        workout
      }
    }
  }
}
    `;

/**
 * __useSubWhiteboardSubscription__
 *
 * To run a query within a React component, call `useSubWhiteboardSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubWhiteboardSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubWhiteboardSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubWhiteboardSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubWhiteboardSubscription, SubWhiteboardSubscriptionVariables>) {
        return Apollo.useSubscription<SubWhiteboardSubscription, SubWhiteboardSubscriptionVariables>(SubWhiteboardDocument, baseOptions);
      }
export type SubWhiteboardSubscriptionHookResult = ReturnType<typeof useSubWhiteboardSubscription>;
export type SubWhiteboardSubscriptionResult = Apollo.SubscriptionResult<SubWhiteboardSubscription>;