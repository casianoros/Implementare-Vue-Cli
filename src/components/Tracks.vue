<template>
    <div class="artists">
        <div class="row tiles">
            <div class="col-sm-4">
                <img :src="createUrl(artist.image)" :data-id="artist.id" class="img-thumbnail image" @click="" style="height: 250px;margin-top:20px;cursor:pointer;">
            </div>
        </div>
    </div>
</template>

<script>
    import tracks from '../assets/assets/data/tracks'
    import artists from '../assets/assets/data/artists'

    export default {
        name: 'tracks',

        data() {
            return {
                artistId: NUmber(this.$route.params.id)
            }
        },
        computed: {
            artist: function () {
                console.log('salutare')
                return artists.find(a => this.artistId === a.id);
            }
        },
        methods: {
            createUrl(name) {
                return require(`../assets/assets/${name}`)
            }
        }

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>