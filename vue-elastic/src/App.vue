<template>
    <div id="app" class="container">
        <div class="input-group input-group-lg bottom">
            <div class="input-group-prepend">
                <span class="input-group-text">Search</span>
            </div>
            <!--Keyup.prevent"search" prevents continuous search from taking place as the user types if we presses the up arrow -->
            <!--v-model directive to create two-way data bindings on form input "query" and textarea elements. It automatically picks the correct way to update the element based on the input type.-->
            <input type="text"
                   class="form-control col-md-6"
                   @keyup.prevent="search"
                   v-model="query"/>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                query: '',
                data: []
            }
        },
        methods: {
            search() {
                axios.get("http://localhost:8080/search?q=" + this.query)
                    .then(response => {
                        console.log(response.data);
                        this.data = response.data;
                    })

                console.log(this.query);
                return this.query;
            }
        }
    }
</script>

<style>
    .bottom {
        margin-top: 50px;
        margin-left: 200px;
    }
</style>
