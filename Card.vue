<template>
    <div class="card">
        <header class="card-header has-background-primary">
            <p class="card-header-title">
                {{country.Country}}
            </p>
            <img :src="'https://www.countryflags.io/' + country.CountryCode.toLowerCase() +'/flat/64.png'">
        </header>
        <div class="card-content">
            <div class="content">
                <ul>
                    <li><b>Total Confirmed: </b>{{country.TotalConfirmed}}</li>
                    <li><b>New Confirmed: </b>{{country.NewConfirmed}}</li>
                    <li><b>Total Deaths: </b>{{country.TotalDeaths}}</li>
                    <li><b>New Deaths: </b>{{country.NewDeaths}}</li>
                    <li><b>Total Recovered: </b>{{country.TotalRecovered}}</li>
                    <li><b>New Recovered: </b>{{country.NewRecovered}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: ['country']
    }
</script>

<style scoped>

</style>