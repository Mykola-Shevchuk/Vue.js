<template>
    <div id="app">
        <div class="wrapper">
            <header>
                <h1>Test Vue.js issue</h1>
            </header>
            <main>
                <router-view/>
            </main>
            <footer>
                <p>Author: <a href="https://www.facebook.com/mik.shevchuk" target="_blank">Mykola Shevchuk</a></p>
            </footer>
        </div>
    </div>
</template>

<style lang="css">
    body {
        padding: 0;
        margin: 0;
        height: 100vh;
        background-color: #eeeeee;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        line-height: 1.5;
    }

    h1, h2, h3, p {
        margin: 0;
        padding: 0;
    }

    a {
        color: #35495d;
        text-decoration: none;
        transition: color ease 0.3s;
    }

    a:hover {
        color: #59b883;
    }

    button {
        background-color: #35485c;
        color: #ffffff;
        border: 0;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        margin-bottom: 20px;
        transition: ease .5s;
    }

    button:hover {
        background-color: #59b883;
    }

    button[disabled="disabled"] {
        opacity: .5;
        cursor: initial;
    }

    button[disabled="disabled"]:hover {
        background-color: #35485c;
    }

    .wrapper {
        width: 1160px;
        margin: 0 auto;
        background-color: #ffffff;
    }

    header {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #59b883;
        background-color: #35495d;
    }

    main {
        padding: 25px;
    }

    footer {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #59b883;
        background-color: #35495d;
    }

    footer a {
        color: #ffffff;
    }
</style>
