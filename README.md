# Learning Intermediate React Topics

I am learning topics like:

- Fetching and updating data with React Query
- All about reducers, context, and providers
- Managing application state with Zustand
- Routing with React Router

You can find the project in which I will be implementing these topics at https://shrip2-gamehub.vercel.app/

## Fetching and updating data with React Query

1. Application Layers

   - API Client: handles sending http requests to backend.
   - HTTP Services: instances of API Client dedicated to working with specific types of objects.
   - Custom RQ Hooks: use HTTP Services to fetch and update data.
   - Components: use custom RQ hooks to fetch and update data.

## Global State Management

1. Server State: Let **React Query** handle it. shoudn't use _React Context_.

2. Client(UI) State: Use Local state + React Context. Contexts should only have a single responsibility. So split them up to minimize re-renders. If splitting up doesn't make sense, & we are dealing with un-neccessary re-renders, use **Zustand** or **Redux**.

3. USEQUERY:

   - ⁠tqfndata:- we expect from backend⁠
   - type of error

4. USEMUTATION:

   - ⁠tdata- data we get from backend
   - ⁠error type
   - ⁠tvars- data that we send to backend

5. **Reducer**:A fn that allows us to centralize state updates in a component. It takes in the current state and an action, and returns a new state.

6. Both **useState** and **useReducer** are used to manage **local state** in a component.

7. **React Context**: Allows sharing data without passing it down through many components in the middle. React Context is like a truck for transporting a box. Inside that box we can 've some state.
