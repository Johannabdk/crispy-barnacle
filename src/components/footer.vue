<template>
    <footer class="footer">
        <div class="container">
            <p>&copy; {{ year }} {{ name }} | <a @click="updatePage('impressum')">Impressum</a></p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
        year: new Date().getFullYear(),
        name: 'Kirsten Bodendieck'
        }
    },
    methods: {
        updatePage(page) {
        this.$emit('update-page', page);
        }
    },
}
</script>

<style scoped>
.footer {
    background-color: #f0f0f0;
    padding: 10px;
    text-align: center;
}

.footer a {
    color: #337ab7;
    text-decoration: none;
    cursor: pointer;
}

.footer a:hover {
    color: #23527c;
}

.footer a:active {
color: #163148;
}

</style>