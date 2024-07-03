import React from 'react'
import './category.css'
const Category = () => {
    return (
        <section id='NewCategory'>
            <div className="categoryContainer">
              
                <div className="categoryItems">
                    <div className="categoryItem">
                        <div className="categoryImageContainer">
                            <img src="https://imgs.search.brave.com/UiXdZB5O5TeFkCtUttCy4ZpkYsm94HKHKkbNNQhmxew/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/ZWF1dGlmdWwtbWF0/dXJlLXdvbWFuLXBv/c2luZy13aXRoLWZh/c2hpb24tY2xvdGhl/c18xNDQ2MjctNDcy/MzQuanBnP3NpemU9/NjI2JmV4dD1qcGc" alt="shirt Image" />
                        </div>
                        <div className="categoryItemTitles">
                            <h2>Women</h2>
                            <a href="">See Details</a>
                        </div>
                    </div>
                    <div className="categoryItem">
                        <div className="categoryImageContainer">
                            <img src="https://imgs.search.brave.com/KeoakIsA2UWO5G61_rSsmetBjDOxDAbV1cfDO5RMCX0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ncS5jb20vcGhv/dG9zLzY2NjVhYmMx/MGM3MGMyNGY1ZjI1/YjE4ZC80OjMvcGFz/cy91bmRlZmluZWQ.jpeg" alt="shirt Image" />
                        </div>
                        <div className="categoryItemTitles">
                            <h2>Men</h2>
                            <a href="">See Details</a>
                        </div>
                    </div>
                    <div className="categoryItem">
                        <div className="categoryImageContainer">
                            <img src="https://imgs.search.brave.com/OVm5Ep72yrNX0qSpm8HNE1jKVxt4mmuz9GdWO9TsLHk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY0L2U4/Lzc0LzY0ZTg3NDFh/MmY5MGQ0ZjIzNjEw/MWYzZGQ5YmE1MWZk/LmpwZw" alt="shirt Image" />
                        </div>
                        <div className="categoryItemTitles">
                            <h2>Kids</h2>
                            <a href="">See Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category
