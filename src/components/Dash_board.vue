<template>
    <nav>
        <v-app-bar flat app color="#BCE4F3" height="50">
            <v-app-bar-nav-icon text="grey" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase black--text">
                <span class="font-weight-light">Next</span>
                <span class="font-weight-bold">Gen</span>
                <span> Solutions</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!--
            <v-btn text="flat" color="grey">
                <span>Welcome</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>-->
            
        </v-app-bar>

        <v-navigation-drawer @click="drawer" v-model="drawer" app class="indigo">
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>

</template>

<script>
// use this page for icons: https://fonts.google.com/icons and https://mui.com/material-ui/material-icons/
export default {
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'home', text: 'Home', route: '/'},
                { icon: 'menu_book', text: 'Documentation', route: '/documentation'},              
            ],
        }
    },
}
</script>