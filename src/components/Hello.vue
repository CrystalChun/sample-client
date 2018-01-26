<!-- Every component has template, script, style -->
<template>
<div class="hello">
    <ul>
        <li v-for="user in users">
            {{user.firstname}} {{user.lastname}}
        </li>
    </ul>
    <input type="text" v-model="input_val">
    <div>
        Input Value: <span v-text="input_val"></span>
    </div>
    <div id="rand">
        <p>Random Number: {{ randomNumber }}</p>
        <button @click="getRandom">Generate Random Number</button>
        <p>Times this button was clicked: {{ clicked }}</p>
    </div>
    <div class="output">
        <p>Random Numbers Generated</p>
        <div>
            <p v-for="number in numbers">
                {{number}}
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Hello',
    data() {
        return {
            users: [
                {firstname: 'Sophia', lastname: 'Sany'},
                {firstname: 'John', lastname: 'Rod'},
                {firstname: 'Harry', lastname: 'Cor'}
            ],
            input_val: '',
            randomNumber: 0,
            clicked: 0,
            numbers: []
        }
    },
    methods: {
        getRandomInt(min, max) {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min + 1)) + min
        },
        getRandom() {
            this.randomNumber = this.getRandomInt(1, 500)
            this.clicked ++
            this.numbers.push(this.randomNumber)
        }
    }
}
</script>

<style>
.hello {
    padding: 2px;
    margin: 2px;
    background-color: beige;
}
#rand {
    display: flex;
    flex-direction: column;
}
.output {
    background-color: white;
    text-align: center;
}
</style>