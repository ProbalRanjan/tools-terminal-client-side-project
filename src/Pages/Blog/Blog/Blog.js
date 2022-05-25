import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container section-container'>
            <div className='blog-section'>
                <h1>My Blog</h1>
            </div>
            <div>

                <div className="question-answer">
                    <img src="" alt="" />
                    <div>
                        <h4><span>Q1:</span> How will you improve the performance of a React Application?</h4>
                        <h6><span style={{ textDecoration: "underline" }}>Ans: </span>

                        </h6>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="" alt="" />
                    <div>
                        <h4><span>Q2:</span> What are the different ways to manage a state in a React application?</h4>
                        <h6><span style={{ textDecoration: "underline" }}>Ans: </span>

                        </h6>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="" alt="" />
                    <div>
                        <h4><span>Q3:</span> How does prototypical inheritance work?</h4>
                        <h6><span style={{ textDecoration: "underline" }}>Ans: </span>

                        </h6>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="" alt="" />
                    <div>
                        <h4><span>Q4:</span> Why you do not set the state directly in React? For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</h4>
                        <h6><span style={{ textDecoration: "underline" }}>Ans: </span>

                        </h6>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="" alt="" />
                    <div>
                        <h4><span>Q5:</span> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                        <h6><span style={{ textDecoration: "underline" }}>Ans: </span>

                        </h6>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="" alt="" />
                    <div>
                        <h4><span>Q1:</span> What is a unit test? Why should write unit tests?</h4>
                        <h6><span style={{ textDecoration: "underline" }}>Ans: </span>

                        </h6>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;