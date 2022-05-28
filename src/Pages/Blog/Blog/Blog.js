import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container section-container px-3 blog-section'>
            <div className=''>
                <h1>My Blog</h1>
            </div>
            <div>
                <div className="question-answer">
                    <img src="https://i.ibb.co/d7N0YVm/ques1.jpg" alt="" />
                    <div>
                        <h4><span>Q1:</span> How will you improve the performance of a React Application?</h4>
                        <h6><span style={{ textDecoration: "underline" }}>Ans: </span>
                            The performance of a react application can be improve by:
                            <ul>
                                <li>Maintaining component state locally when necessary.</li>
                                <li>To prevent unnecessary reloads of React components, memorized them.</li>
                                <li>Code-splitting in React using dynamic import().</li>
                                <li>Virtualizing lists or windows in React.</li>
                                <li>Lazy loading images in React.</li>
                                <li>The entire DOM tree could be re rendered by React.</li>
                            </ul>
                        </h6>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="https://i.ibb.co/dBDs7Wc/ques2.jpg" alt="" />
                    <div>
                        <h4><span>Q2:</span> What are the different ways to manage a state in a React application?</h4>
                        <h6><span style={{ textDecoration: "underline" }}>Ans: </span>
                            There are many way to manage a state in React Application. Some of them is Local state, Server State, Global State, URL State.

                            <ul>
                                <li>Local State - Local state refers to data that is managed by one or more components. A useState hook is usually used in React to manage local state.</li>
                                <li>Server State - We must integrate data that comes from an external server with the state of our UI. Managing server state with all of our local and global UI states is a simple concept, but can be difficult.</li>
                                <li>Global State - Managing the global state involves managing data across multiple components. We need a global state any time we want to get or update data anywhere in our app, or even in multiple components.</li>
                                <li>URL State - This data is available in our URLs, including the pathname and query parameters. The URL state is often overlooked as a category of state, but it is crucial. The URL states of our application are often accessed by a number of major parts of our application.</li>
                            </ul>

                        </h6>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="https://i.ibb.co/kD42XVH/ques3.jpg" alt="" />
                    <div>
                        <h4><span>Q3:</span> How does prototypical inheritance work?</h4>
                        <h6><span style={{ textDecoration: "underline" }}>Ans: </span>
                            JavaScript is a prototype-based Object-Oriented programming language. JavaScript now supports prototypal inheritance, meaning that methods and objects can be shared, extended, and copied after the ES6 updates.
                            Sharing between objects makes it easy to inherit structure (data fields), behavior (methods), and state (data values).
                            One of the few prototype-capable languages is JavaScript, whose capabilities are fairly unique. When used properly, prototypical inheritance in JavaScript is a powerful tool that can save you hours of coding time.
                        </h6>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="https://i.ibb.co/L9081GV/ques4.jpg" alt="" />
                    <div>
                        <h4><span>Q4:</span> Why you do not set the state directly in React? For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</h4>
                        <h6><span style={{ textDecoration: "underline" }}>Ans: </span>
                            In a functional component, useState() enables you to have state variables. A React component can be either class or functional. Class components implement classes in ES6, while functional components implement ES6 classes. Component classes extend Components and provide state and lifecycle methods: class Message extends React. It returns a list of two entries and takes the state as an argument. It consists of two elements: the first element represents the state initially, while the second one represents a function that is used to modify it. As an argument, we can also specify a function to compute the initial state. Using function useState(), you can set state variables in a functional component. e initial state.
                        </h6>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="https://i.ibb.co/jHvc8Fz/ques5.jpg" alt="" />
                    <div>
                        <h4><span>Q1:</span> What is a unit test? Why should write unit tests?</h4>
                        <h6><span style={{ textDecoration: "underline" }}>Ans: </span>
                            A unit test verifies that the software behaves as expected. The unit test verifies whether a small and isolated part of the codebase called "unit" functions as expected. By comparing the actual behavior of the smallest parts of an application with the expected behavior in complete isolation, unit tests verify its functionality. In this case, "complete isolation" refers to not connecting the application to external dependencies, such as databases, the filesystem, or HTTP services, during unit testing. As a result, unit tests are fast and stable, as they won't fail due to integration issues with external services.

                            <p className='fw-bold pt-4 mb-2'>That is why we should write unite tests:</p>
                            <ul>
                                <li>It is easier and faster to find and fix bugs with unit tests.</li>
                                <li>A higher level of code quality is a result of unit tests.</li>
                                <li>They improve application architecture.</li>
                                <li>Unit tests act as documentation.</li>
                            </ul>
                        </h6>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;