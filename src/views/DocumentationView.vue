<template>
    <div class="imagesview">
        <v-container>
            <h1 class="subheading my-4">Prototype Diagrams</h1>
            <v-container class="my-5" wrap>
                <v-row  v-for="content in contents" :key="content.key">
                    <v-col id="leftcol" cols="12" md="5">
                        <v-card class="rounded-xl">
                            <v-img
                            :src='content.url' 
                            max-height="250"
                            contain></v-img>
                        </v-card>
                    </v-col>
                    <v-col class="text-center" id="rightcol" cols="12" md="5">
                        <v-container class="subheading">
                            {{content.title}}
                        </v-container>
                        <v-divider></v-divider>
                        <v-container class="my-1 text-left" >
                            {{content.description}}
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
        <v-divider></v-divider>
    </div>


</template>




<script>
// TO UPLOAD PICTURES: SIGN INTO IMGUR ACCOUNT:
// USE YOUR GMAIL ACCT TO LOG IN
export default {
    data() {
        return {
            contents: [
                {
                    key: 1,
                    url: 'https://i.imgur.com/LxSiT7P.jpg',
                    title: 'Knife Guard Diagram',
                    description: 'The current knife guard attachment prototype includes a rotating component, attaching the guard to the handle of the knife, allowing for safety of the user from the blade. Furthermore, a slider is attached near the end of the guard, allowing for a rocking motion while keeping the guard steady and still.'
                },
                {
                    key: 2,
                    url: 'https://i.imgur.com/VvNxbP5.jpg',
                    title: 'Plate Diagram',
                    description: 'The current plate prototype design includes curved sides, allowing for easier scooping when an individual may not have access to another limb. A portion of the plate also contains ridges that hold meat in place, allowing for easier cutting. Lastly, a non-slip liner is coated at the bottom of the plate in order to reduce the chances of spilling due to movement.'
                },
                {
                    key: 3,
                    url: 'https://i.imgur.com/cKohGDr.jpg',
                    title: 'Utensil Holder Diagram',
                    description: 'The current utensil holder prototype design includes specifically cut holes in order to accomodate different shapres of utensils. It also incorporates a snap-lock button mechanism in order to allow for different sized utensils to be compatible with the product.'
                }
            ],
        }
    }
}


</script>


<style scoped>

.subheading {
    text-align: center;
}

#leftcol {
    color:red;
    text-align: right;
}

v-img {
    height: 100%;
    width: 100%
}

</style>