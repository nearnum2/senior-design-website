<template>
    <div class="imagesview">
        <h1 class="subheading my-4">Images Page</h1>
        <v-container class="my-5" wrap>
            <v-row v-for="content in contents" :key="content.key" >
                <v-col id="leftcol" cols="12" md="5">
                    <v-card class="rounded-xl">
                        <v-img :src='content.url' max-height="350" mex-width="150"></v-img>
                    </v-card>
                    
                </v-col>
                <v-col id="rightcol" cols="12" md="5">
                    {{content.description}}
                </v-col>
            </v-row>
            
        </v-container>
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
                    url: 'https://i.imgur.com/ZE33mAT.jpg',
                    description: 'Folks Kitchenware Competetive Product'
                },
                {
                    key: 2,
                    url: '',
                    description: '',
                }
            ]
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

#rightcol {
    text-align: left;
}

</style>