import React from 'react';

const NavBar = () => {
    return (
        <div role="tabpanel" >
            <ul class="nav nav-tabs float-right" role="tablist">
            <li class="nav-item">
                    <a class="nav-link active" href="#Home" role="tab" data-toggle="tab">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#feed" role="tab" data-toggle="tab">Feed</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#closet" role="tab" data-toggle="tab">Closet</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#account" role="tab" data-toggle="tab">Account</a>
                </li>
            </ul>
            <div class="tab-content tab-bump">
                <div id="home1">
                    <p>SNEAK-PEEK</p>
                </div>
            </div>
        </div>
    );
}

export default NavBar;