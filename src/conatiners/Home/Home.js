import React from 'react';
// import '%PUBLIC_URL%/assets/js/app.js'

function Home(props) {
    return (
        <main id="main">
            <section className="biosec container flex">
                <div className="bio">
                    <h4>Hello Everyone!</h4>
                    <h1>I'm
                        <div>
                            {/* <span className="multi-text" /> */}
                            <span>Blogger</span>
                            <span className="blink" />
                        </div>
                    </h1>
                    <p>Welcome to my corner of the internet! I'm Coder, a passionate web developer.experience in
                        crafting dynamic and visually stunning websites, My journey in the world of coding has led me to
                        unravel the potential of languages like HTML, CSS, JavaScript, Next js and beyond. </p>
                    <div className="emailsub">
                        <form action="#" className="flex">
                            <input type="email" name="email" id="email" placeholder="Type your email address" />
                            <button type="submit">Subcribe</button>
                        </form>
                    </div>
                </div>
                <div className="bioimg">
                    <img src="assets/img/ai-man.png" alt />
                    <div className="pattern-1"><img src="assets/svg/pattern-1.svg" alt /></div>
                    <div className="pattern-2"><img src="assets/svg/pattern-2.svg" alt /></div>
                    <div className="pattern-3"><img src="assets/svg/pattern-3.svg" alt /></div>
                    <div className="pattern-4"><img src="assets/svg/pattern-4.svg" alt /></div>
                </div>
            </section>
            <section className="container hottopicssec flex">
                <div className="hottopics">
                    <h3>Hot topics</h3>
                    <p>Don't miss out on the latest news about Travel tips, Hotels review, Food guide...</p>
                    <div className="lrbtn">
                        <button className="leftbtn"><i className="fa-solid fa-arrow-left" /></button>
                        <button className="rightbtn"><i className="fa-solid fa-arrow-right" /></button>
                    </div>
                </div>
                <div className="hotcards flex">
                    <div className="hcard">
                        <a href>
                            <img src="assets/img/travel.jpg" alt />
                            <div className="hdetails">
                                <div className="hdetail">
                                    <h4>Travel</h4>
                                    <p>5 Articles</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="hcard">
                        <a href="/">
                            <img src="assets//img/nature.jpg" alt />
                            <div className="hdetails">
                                <div className="hdetail">
                                    <h4>Culture</h4>
                                    <p>12 Articles</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="hcard">
                        <a href>
                            <img src="assets//img/lifestyle.jpg" alt />
                            <div className="hdetails">
                                <div className="hdetail">
                                    <h4>Lifestyle</h4>
                                    <p>45 Articles</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="hcard">
                        <a href="/">
                            <img src="assets//img/fashion.jpg" alt />
                            <div className="hdetails">
                                <div className="hdetail">
                                    <h4>Fashion</h4>
                                    <p>8 Articles</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="hcard">
                        <a href="/">
                            <img src="assets//img/food.jpg" alt />
                            <div className="hdetails">
                                <div className="hdetail">
                                    <h4>Food</h4>
                                    <p>15 Articles</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="hcard">
                        <a href="/">
                            <img src="assets//img/space.jpg" alt />
                            <div className="hdetails">
                                <div className="hdetail">
                                    <h4>Space</h4>
                                    <p>2 Articles</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="hcard">
                        <a href="/">
                            <img src="assets//img/space.jpg" alt />
                            <div className="hdetails">
                                <div className="hdetail">
                                    <h4>Animal</h4>
                                    <p>9 Articles</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="hcard">
                        <a href="/">
                            <img src="assets//img/space.jpg" alt />
                            <div className="hdetails">
                                <div className="hdetail">
                                    <h4>Minimal</h4>
                                    <p>1 Articles</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="hcard">
                        <a href="/">
                            <img src="assets//img/interior.jpg" alt />
                            <div className="hdetails">
                                <div className="hdetail">
                                    <h4>Interior</h4>
                                    <p>5 Articles</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <div className="rightshadowimg" />
            <div className="container bigtitle">
                <h2 className="textcolor">Editor's picked</h2>
                <p>Featured and highly rated articles</p>
            </div>
            <section className="editorcards container flex">
                <div className="edcard">
                    <a href="/">
                        <img src="assets//img/travel.jpg" alt />
                    </a><div className="edcarddetl"><a href="/">
                        <div className="tegtime flex">
                            <h5>#Travel</h5>
                            <h5 className="flex">
                                <i className="fa-regular fa-clock" />
                                <span>5</span>mins read
                            </h5>
                        </div>
                    </a><a href="/">
                            <h2>Har Ghar Tiranga: Check 19 Interesting Facts about India’s National Flag</h2>
                        </a>
                        <div className="postby flex">
                            <div className="flex authorbx">
                                <img src="assets//img/author.png" alt />
                                <div className="authorname">
                                    <h4>Coder</h4>
                                    <span>23 August 2023</span>
                                </div>
                            </div>
                            <a href="/" className="readmore"><span>Read more</span></a>
                        </div>
                    </div>
                </div>
                <div className="edcard">
                    <a href="/">
                        <img src="assets//img/spacecard.jpg" alt />
                    </a><div className="edcarddetl"><a href="/">
                        <div className="tegtime flex">
                            <h5>#Travel</h5>
                            <h5 className="flex">
                                <i className="fa-regular fa-clock" />
                                <span>5</span>mins read
                            </h5>
                        </div>
                    </a><a href="/">
                            <h2>Space game wallpaper featuring an alien planet at night.</h2>
                        </a>
                        <div className="postby flex">
                            <div className="flex authorbx">
                                <img src="assets//img/author.png" alt />
                                <div className="authorname">
                                    <h4>Coder</h4>
                                    <span>23 August 2023</span>
                                </div>
                            </div>
                            <a href="/" className="readmore"><span>Read more</span></a>
                        </div>
                    </div>
                </div>
                <div className="edcard">
                    <a href="/">
                        <img src="assets//img/sun.jpg" alt />
                    </a><div className="edcarddetl"><a href="/">
                        <div className="tegtime flex">
                            <h5>#Travel</h5>
                            <h5 className="flex">
                                <i className="fa-regular fa-clock" />
                                <span>5</span>mins read
                            </h5>
                        </div>
                    </a><a href="/">
                            <h2>Gallery of NASA Sun Images - NASA Space Place </h2>
                        </a>
                        <div className="postby flex">
                            <div className="flex authorbx">
                                <img src="assets//img/author.png" alt />
                                <div className="authorname">
                                    <h4>Coder</h4>
                                    <span>23 August 2023</span>
                                </div>
                            </div>
                            <a href="/" className="readmore"><span>Read more</span></a>
                        </div>
                    </div>
                </div>
                <div className="edcard">
                    <a href="/">
                        <img src="assets//img/photography.jpg" alt />
                    </a><div className="edcarddetl"><a href="/">
                        <div className="tegtime flex">
                            <h5>#Travel</h5>
                            <h5 className="flex">
                                <i className="fa-regular fa-clock" />
                                <span>5</span>mins read
                            </h5>
                        </div>
                    </a><a href="/">
                            <h2>Helpful Tips for Working from Home as a Freelancer</h2>
                        </a>
                        <div className="postby flex">
                            <div className="flex authorbx">
                                <img src="assets//img/author.png" alt />
                                <div className="authorname">
                                    <h4>Coder</h4>
                                    <span>23 August 2023</span>
                                </div>
                            </div>
                            <a href="/" className="readmore"><span>Read more</span></a>
                        </div>
                    </div>
                </div>
                <div className="edcard">
                    <a href="/">
                        <img src="assets//img/atalbrige.jpg" alt />
                    </a><div className="edcarddetl"><a href="/">
                        <div className="tegtime flex">
                            <h5>#Travel</h5>
                            <h5 className="flex">
                                <i className="fa-regular fa-clock" />
                                <span>5</span>mins read
                            </h5>
                        </div>
                    </a><a href="/">
                            <h2>Foot bridge at Ahmedabad Sabarmati Riverfront</h2>
                        </a>
                        <div className="postby flex">
                            <div className="flex authorbx">
                                <img src="assets//img/author.png" alt />
                                <div className="authorname">
                                    <h4>Coder</h4>
                                    <span>23 August 2023</span>
                                </div>
                            </div>
                            <a href="/" className="readmore"><span>Read more</span></a>
                        </div>
                    </div>
                </div>
                <div className="showmorepost flex">
                    <a href="/">Show More Posts<i className="fa-solid fa-arrow-right" /></a>
                </div>
            </section>
            <div className="leftshadowimg" />
            <div className="contactbanner container flex">
                <img src="assets//img/contactus.jpg" alt />
            </div>
            <div className="container bigtitle">
                <h2 className="textcolor">Popular Tags</h2>
                <p>Most searched keywords</p>
            </div>
            <div className="tegsec container flex">
                <a href="/"><img src="assets//img/business.png" alt />
                    Business</a>
                <a href="/"><img src="assets/img/nature.png" alt />
                    Nature</a>
                <a href="/"><img src="assets//img/plant.png" alt />Plant</a>
                <a href="/"><img src="assets//img/interior.png" alt />Interior</a>
                <a href="/"><img src="assets//img/minimal.png" alt />Minimal</a>
                <a href="/"><img src="assets//img/animal.png" alt />Animal</a>
                <a href="/"><img src="assets//img/space.png" alt />Space</a>
                <a href="/"><img src="assets//img/food.png" alt />
                    Food</a>
                <a href="/"><img src="assets//img/fashion.png" alt />Fashion</a>
                <a href="/"><img src="assets//img/lifestyle.png" alt />Lifestyle</a>
                <a href="/"><img src="assets//img/culture.png" alt />Culture</a>
                <a href="/"><img src="assets//img/travel.png" alt />Travel</a>
            </div>
            <section className="recentpostsec container flex">
                <div className="recentposts">
                    <div className="bigtitle">
                        <h2 className="textcolor">Recent posts</h2>
                        <p>Don't miss the latest trends</p>
                    </div>
                    <div className="posts">
                        <div className="post flex">
                            <a href="/">
                                <img src="assets//img/nature-card.jpg" alt />
                            </a>
                            <div className="postdetails">
                                <div className="postlabel">
                                    <a href="/">Nature</a>
                                </div>
                                <a href="/">
                                    <h2>10 Easy Ways to Be Environmentally Conscious At Home</h2>
                                </a>
                                <p>Take small but impactful steps towards environmental stewardship and sustainability
                                    within the comfort of your own home, contributing to a greener planet</p>
                                <div className="posttimeteg flex">
                                    <div className="flex">
                                        <h5><span>#</span>Travel</h5>
                                        <h5><span>#</span>Lifestyle</h5>
                                    </div>
                                    <div className="tegtime">
                                        <h5 className="flex">
                                            <i className="fa-regular fa-clock" />
                                            <span>5</span>mins read
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post flex">
                            <a href="/">
                                <img src="assets//img/Lifestyle-Diseases.jpg" alt />
                            </a>
                            <div className="postdetails">
                                <div className="postlabel">
                                    <a href="/">Lifestyle</a>
                                </div>
                                <a href="/">
                                    <h2>Most Common Lifestyle Diseases Working Professionals May Be At Risk Of</h2>
                                </a>
                                <p>A healthy Lifestyle is the way of life adopted by an individual, a group, or a society.
                                    The word “lifestyle” was first coined by Alfred Adler who tried to identify the several
                                    factors that govern the quality of life led by different individuals.</p>
                                <div className="posttimeteg flex">
                                    <div className="flex">
                                        <h5><span>#</span>Travel</h5>
                                        <h5><span>#</span>Lifestyle</h5>
                                    </div>
                                    <div className="tegtime">
                                        <h5 className="flex">
                                            <i className="fa-regular fa-clock" />
                                            <span>5</span>mins read
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post flex">
                            <a href="/">
                                <img src="assets//img/tajmahel.jpg" alt />
                            </a>
                            <div className="postdetails">
                                <div className="postlabel">
                                    <a href="/">Travel</a>
                                </div>
                                <a href="/">
                                    <h2>Photo of Taj Mahal photo – Free Architecture Image on Unsplash</h2>
                                </a>
                                <p>The Taj Mahal is located on the right bank of the Yamuna River in a vast Mughal garden
                                    that encompasses nearly 17 hectares, in the Agra District in Uttar Pradesh.</p>
                                <div className="posttimeteg flex">
                                    <div className="flex">
                                        <h5><span>#</span>Travel</h5>
                                        <h5><span>#</span>Lifestyle</h5>
                                    </div>
                                    <div className="tegtime">
                                        <h5 className="flex">
                                            <i className="fa-regular fa-clock" />
                                            <span>5</span>mins read
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post flex">
                            <a href="/">
                                <img src="assets//img/space-card.jpeg" alt />
                            </a>
                            <div className="postdetails">
                                <div className="postlabel">
                                    <a href="/">Space</a>
                                </div>
                                <a href="/">
                                    <h2>105 Fascinating Universe Facts That Will Blow Your Mind - Facts.net</h2>
                                </a>
                                <p>It’s always fun to learn new things about the universe because it’s so mysterious yet we
                                    keep discovering more. These fascinating universe facts will make you realize how we’re
                                    all just a tiny speck in the grand scheme of things.</p>
                                <div className="posttimeteg flex">
                                    <div className="flex">
                                        <h5><span>#</span>Travel</h5>
                                        <h5><span>#</span>Lifestyle</h5>
                                    </div>
                                    <div className="tegtime">
                                        <h5 className="flex">
                                            <i className="fa-regular fa-clock" />
                                            <span>5</span>mins read
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="postslider">
                    <div className="popularposts">
                        <div className="poptitle">
                            <h3>Popular Posts</h3>
                        </div>
                        <div className="populposts">
                            <div className="popupost flex">
                                <img src="assets//img/work-freelancer.png" alt />
                                <div className="popupostde">
                                    <a href="/">
                                        <h4>Helpful Tips for Working from Home as a Freelancer</h4>
                                    </a>
                                    <div className="poputime flex">
                                        <h5><span>5</span>mins read</h5>
                                        <p>▪</p>
                                        <h5>25 April 2023</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="popupost flex">
                                <img src="assets//img/work-freelancer2.png" alt />
                                <div className="popupostde">
                                    <a href="/">
                                        <h4>Helpful Tips for Working from Home as a Freelancer</h4>
                                    </a>
                                    <div className="poputime flex">
                                        <h5><span>5</span>mins read</h5>
                                        <p>▪</p>
                                        <h5>25 April 2023</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="popupost flex">
                                <img src="assets//img/work-freelancer3.png" alt />
                                <div className="popupostde">
                                    <a href="/">
                                        <h4>Helpful Tips for Working from Home as a Freelancer</h4>
                                    </a>
                                    <div className="poputime flex">
                                        <h5><span>5</span>mins read</h5>
                                        <p>▪</p>
                                        <h5>25 April 2023</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="popupost flex">
                                <img src="assets//img/work-freelancer4.png" alt />
                                <div className="popupostde">
                                    <a href="/">
                                        <h4>Helpful Tips for Working from Home as a Freelancer</h4>
                                    </a>
                                    <div className="poputime flex">
                                        <h5><span>5</span>mins read</h5>
                                        <p>▪</p>
                                        <h5>25 April 2023</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="popupost flex">
                                <img src="assets//img/work-freelancer5.png" alt />
                                <div className="popupostde">
                                    <a href="/">
                                        <h4>Helpful Tips for Working from Home as a Freelancer</h4>
                                    </a>
                                    <div className="poputime flex">
                                        <h5><span>5</span>mins read</h5>
                                        <p>▪</p>
                                        <h5>25 April 2023</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popularposts">
                        <div className="poptitle">
                            <h3>Last Comment</h3>
                        </div>
                        <div className="postcomments">
                            <div className="comment">
                                <p><span>"</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio blanditiis
                                    rerum suscipit quisquam quaerat odio repudiandae perspiciatis veritatis?<span>"</span>
                                </p>
                                <div className="authorcomment flex">
                                    <img src="assets//img/author.png" alt />
                                    <div className="authortimename">
                                        <h5>Coder</h5>
                                        <span>25 August 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div className="comment">
                                <p><span>"</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio blanditiis
                                    rerum suscipit quisquam quaerat odio repudiandae perspiciatis veritatis?<span>"</span>
                                </p>
                                <div className="authorcomment flex">
                                    <img src="assets//img/author.png" alt />
                                    <div className="authortimename">
                                        <h5>Coder</h5>
                                        <span>25 August 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div className="comment">
                                <p><span>"</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio blanditiis
                                    rerum suscipit quisquam quaerat odio repudiandae perspiciatis veritatis?<span>"</span>
                                </p>
                                <div className="authorcomment flex">
                                    <img src="assets//img/author.png" alt />
                                    <div className="authortimename">
                                        <h5>Coder</h5>
                                        <span>25 August 2023</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Home;