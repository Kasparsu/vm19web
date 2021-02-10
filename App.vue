<template>
    <div class="container">
        <section class="section">
            <div class="columns">
                <div class="column is-three-fifths">
                    <input class="input" type="text" v-model="search">
                </div>
                <div class="column is-two-fifth">
                    <div class="select">
                        <select v-model="sort">
                            <option v-for="option in sortOptions" :value="option.value">{{option.name}}</option>
                        </select>
                    </div>
                    <div class="select">
                        <select v-model="order">
                            <option value="asc">Ascending</option>
                            <option value="desc">Decending</option>
                        </select>
                    </div>
                </div>
            </div>


            <div class="columns is-multiline">
                <div class="column is-one-quarter" v-for="(country, index) in sortedCountries" :key="index">
                    <card :country="country"></card>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    const axios = require('axios');
    import Card from "./Card";

    export default {
        name: "App",
        components: {Card},
        created() {
            axios.get('https://api.covid19api.com/summary').then((response) => {
                this.countries = response.data.Countries;
            });
        },
        data() {
            return {
                countries: [],
                search: '',
                sort: 'TotalConfirmed',
                order: 'desc',
                sortOptions: [
                    {name: 'Total Confirmed', value: 'TotalConfirmed'},
                    {name: 'New Confirmed', value: 'NewConfirmed'},
                    {name: 'Total Deaths', value: 'TotalDeaths'},
                    {name: 'New Deaths', value: 'NewDeaths'},
                    {name: 'Total Recovered', value: 'TotalRecovered'},
                    {name: 'New Recovered', value: 'NewRecovered'},
                ]
            }
        },
        methods: {},
        computed: {
            filteredCountries() {
                return this.countries.filter(country => {
                    return country.Country.substr(0, this.search.length).toLowerCase() === this.search.toLowerCase();
                });
            },
            sortedCountries(){
                return this.filteredCountries.sort((countryA, countryB) => {
                    let order = this.order === 'asc' ? -1 : 1;
                    if(countryA[this.sort] > countryB[this.sort]){
                        return -1 * order;
                    } else if (countryA[this.sort] < countryB[this.sort]){
                        return 1 * order;
                    } else {
                        return 0;
                    }
                })
            }

        }
    }
</script>

<style scoped>

</style>