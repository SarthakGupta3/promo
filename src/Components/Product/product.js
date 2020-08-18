import React from 'react';
import './product.css';

import View from '../../Assets/view.png';

class Product extends React.Component{
    render(){
       return (
           <div>
               <h2 className="heading">Cwatch Q</h2>
               <div className="product">
                   <div className="product-info">
                    <div className="product-info-left">
                            <h3>About The Product</h3>
                            <div className="about-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className="product-info-right">
                            <div>
                                <h4 className="features-text">Key Features</h4>
                                <div className="key-features">
                                    <div className="feature-container container1">
                                        <lottie-player  autoplay loop id="firstLottie" src='https://assets1.lottiefiles.com/private_files/lf30_wBcF24.json' style={{ width:'100px', height:'100px'}}></lottie-player>
                                        <p  className="feature-info">Temperature Monitoring</p>
                                    </div>
                                    <div className="feature-container container2">
                                        <lottie-player  autoplay loop id="secondLottie" src='https://assets8.lottiefiles.com/private_files/lf30_D4yZiV.json' style={{ width:'100px', height:'100px'}}></lottie-player>
                                        <p  className="feature-info">Geo Fencing breach Alerts</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <h4 className="features-text">Other Features</h4>
                                <div className="other-features">
                                    {/* <div className="feature-container container1">
                                        <lottie-player  autoplay loop id="firstLottie" src='https://assets1.lottiefiles.com/private_files/lf30_wBcF24.json' style={{ width:'100px', height:'100px'}}></lottie-player>
                                        <p  className="feature-info">Temperature Monitoring</p>
                                    </div>
                                    <div className="feature-container container2">
                                        <lottie-player  autoplay loop id="secondLottie" src='https://assets8.lottiefiles.com/private_files/lf30_D4yZiV.json' style={{ width:'100px', height:'100px'}}></lottie-player>
                                        <p  className="feature-info">Geo Fencing breach Alerts</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                   </div>

                   <div className="product-snapshots">
                       <h4 className="snapshot-heading">Snapshots</h4>
                       <div className="image-container">
                        <div>
                                <img src={View} alt="image1" className="image-product"></img>
                            </div>
                            <div>
                                <img src={View} alt="image2" className="image-product"></img>
                            </div>
                            <div>
                                <img src={View} alt="image3" className="image-product"></img>
                            </div>
                       </div>
                       
                   </div>
                    
               </div>
           </div>
       )
    }
}

export default Product;