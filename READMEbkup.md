#ReactLearning

#React Element 
    React Element nothing but a object. 
    React.createElement("div",{id:"parent"},"Hi Its div") it will convert to object.
    After render to DOM it will become HTML elements.
    i.e. - React Element => Object => HTMLElement (render)
#React render
    For render we need to create root `ReactDOM.createRoot(document.getElementById("id"))` -> `render()`
    render(var) will replace HTML not append
#JSX
    JSX stands for JavaScript XML.
    JSX is not HTML in JavaScript, its `HTML like syntax`.
    JSX allows us to write HTML in React.
    JSX makes it easier to write and add HTML in React.
    JSX is not valid pure JavaScript , browser not understand. 
       ` So JSX transpiled before it reach to JS engine by Parcel using package name Babel`
       Babel is javascript compiler.
    HOW JSX work :(convert =>)
        `JSX => React.createElement => JS object => HTMLElements (render)`, so end of the day JSX is nothing but a React.createElement()
        `Babel` is converting this JSX
    in JSX we use <div className=""> unlike HTML class <div class=""></div>
        because `class` is a reserve word in JavaScript.
    JSX- whenever we write attributes in JSX we have to write in camelCase.
    JSX- whenever we write multiple line in Jsx we need to wrap inside first brackets (), so Babel will understand where jsx is start and where it end.
#React Component
    Class based Component 
        Old way writing code
    Functional Component
        New way of writing code
        its just a normal java script function,but work in isolation and return JSX.
        for render functional components we wrap inside angular brackets (<functional component/>)
        inside function using `{ js code }` we can write any javascript code
    Component composition
        Component composition in React involves the inclusion of one or more components in a single component.
        3 way - 
            `{Heading()}`
            <Heading/>
            <Heading></Heading>
    Props - stands for properties.
        Props are arguments passed into React components.
        Props are passed to components via HTML attributes.
        Props are like function arguments in JavaScript and attributes in HTML.
    Key
        Whenever we loop in data for component and props its best practice to use unique key.
    Config Driven UI
        -
    Why do we use React?
        we chose React because it enhances our developer experience, making it more seamless and efficient.
        React render cycle is very fast.
    Two types of export/import in React
        1.Default export/import.
            export default Header;
            import Header from "./components/Header"
        2.Named export/import.
            export const ComponentName=>()={....}
            import { ComponentName } from "../path"
    What is Hook ?
        React Hooks are functions that allow you to use state and other React features in functional components.
    Two crucial hooks we frequently utilize are:
        1. useState()
        2. useEffect()
#React fiber - Reconciliation - "diffing" algorithm
    #useEffect()
        syntax - `useEffect(()=>{},[])` // (CB, dependencyArr)
        -useEffect call back function will be call after component renders.
        -if no dependencyArr then useEffect is call on every rendering.
        -if dependencyArr is empty ->[]->useEffect is called om initial render (just once)
        -whenever state variable change react re render the components.(useState)
        -`whenever state variable update, React trigger a reReconciliation cycle (re-render the components)`
        - Never use state variable inside loop, if-else condition
#react-router-dom
    -React Router enables "client side routing".
        - `createBrowserRouter([ ...//list of route  ])`
            - E.G -const router = createBrowserRouter([,
                                    {   
                                        path: "about",
                                        element: <div>About</div>,
                                    },
                                ]);
        - `RouterProvider` provide the routing configuration to the App.
        - `useRouteError` is hook use to get error information. We can use it in custom error page.
        -  For header intake in same position after change the route , we can use children route. eg. -
            - CreateBrowserRouter([,
                                    {   
                                        path: "about",
                                        element: <About/>,
                                        children:[

                                        ],
                                         errorElement:<Error/>
                                    },
                                ]);
        - `Link` is same as li <a href=""></a>, Syntax - <Link to="/path"></link>
        - The main difference is anchor tag reload whole page, but link will reload only the component.



#Class based component
    - Class Components are the reusable code blocks or classes that extends the React.Component
    - Syntax `class app extent React.Component{ render(){ return //code }}`
    - for receiving props 
        - we use constructor class
            constructor(props){
                super(props);
            }
        - now component can access it with `this.props`
        - loading class based component to the web page means creating a instance of this class to them
        - best practice use state variable inside constructor
        - class base component lief cycle
            -Parent constructor
            -Parent render
            -Child constructor
            -childe render
            -child component Did Mount
            -Parent component Did Mount
        -Component Did Mount use to call APIs