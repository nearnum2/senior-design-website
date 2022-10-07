<template>
    <div class="doc_view">
        <v-container>
            <h1 class="subheading my-4">Prototype Diagrams</h1>
            <v-container class="my-5" wrap>
                <v-row  v-for="content in contents" :key="content.key">
                    <v-col id="leftcol" cols="12" md="5">
                        <v-card class="rounded-xl">
                            <v-img
                            :src='content.url' 
                            max-height="250"
                            contain
                            ></v-img>
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
        <v-container class="text-center my-5">
            <h1 class="subehading mb-5">
                Prototyping, Testing, and Modeling
            </h1>
            
                    <!--
                    <v-card
    flat
    tile
  >
  
    <v-window
      v-model="onboarding"
    >
      <v-window-item
        v-for="cad_design in cad_designs"
        :key="cad_design.url"
      >
        <v-card
          color="black"
          height="600"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <h1
              style="font-size: 5rem;"
              class="white--text"
            >
              {{cad_design.title}}
            </h1>
            <v-img 
            :src="cad_design.link"
            style="height: 400px; width: 800px"></v-img>
            
          </v-row>
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between ">
      <v-btn
        text
        @click="prev"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group
        v-model="onboarding"
        class="text-center"
        mandatory
      >
        <v-item
          v-for="n in length"
          :key="`btn-${n}`"
          v-slot="{ active, toggle }"
        >
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn
        text
        @click="next"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
                    
                    <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    show-arrows-on-hover
                >
                    <v-carousel-item
                    v-for="cad_design in cad_designs"
                    :key="cad_design.url"
                    >
                    <v-sheet
                        height="35%"
                    >
                        <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        >
                        <div class="text-h5">
                            {{cad_design.title}}
                        </div>
                        <v-img :src="cad_design.link">

                        </v-img>
                        </v-row>
                    </v-sheet>
                    </v-carousel-item>
                </v-carousel> -->
                    <v-row>
                        <v-col 
                        class="pa-3 d-flex flex-column"
                        cols="4"
                        v-for="cad_design in cad_designs" 
                        :key="cad_design.link">
                            <v-card class="flex d-flex flex-column">
                                <div class="mt-5 mb-2">
                                    <v-img 
                                    :src='cad_design.link'
                                    contain
                                    class="mx-auto"
                                    style="width:252px; height:166px">
                                    </v-img>
                                </div>
                                <p class="caption font-italic">
                                    {{cad_design.title}}
                                </p>
                                <v-card-text>
                                    {{cad_design.description}}
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn flat outlined router :to="cad_design.route">
                                        More Info
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                            
                        </v-col>
                    </v-row>
                
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
            length: 3,
            onboarding: 0,
            contents: [
                {
                    key: 1,
                    url: 'https://i.imgur.com/LxSiT7P.jpg',
                    title: 'Knife Guard Diagram',
                    status: true,
                    description: 'The initial knife guard attachment included a rotating component that would allow for the user to chop. It would attach the handle of the knife, allowing for it to be attached to varying size of handles. Furthermore, a slider is attached near the bottom end of the guard, allowing for a back-and-forth cutting motion while keeping the guard relatively steady and still.'
                },
                {
                    key: 2,
                    url: 'https://i.imgur.com/VvNxbP5.jpg',
                    title: 'Plate Diagram',
                    status: true,
                    description: 'The current plate prototype design includes curved sides, allowing for easier scooping when an individual may not have access to another limb. A portion of the plate also contains ridges that hold meat in place, allowing for easier cutting. Lastly, a non-slip liner is coated at the bottom of the plate in order to reduce the chances of spilling due to movement.'
                },
                {
                    key: 3,
                    url: 'https://i.imgur.com/cKohGDr.jpg',
                    title: 'Utensil Holder Diagram',
                    status: false,
                    description: 'The current utensil holder prototype design includes specifically cut holes in order to accomodate different shapres of utensils. It also incorporates a snap-lock button mechanism in order to allow for different sized utensils to be compatible with the product.'
                }
            ],
            cad_designs: [
                //TODO: MAKE SURE TO UPDATE THIS TO CHANGE THE URLS AND NOT REFERENCE IT AS THE KEY
                //
                //
                //
                //
                //
                {
                    title: 'Knife Guard CAD Model',
                    button: 'Knife Guard',
                    link: 'https://i.imgur.com/G0ih8Pm.jpg', //'Design 1: https://i.imgur.com/1N9uhLB.jpg', Design 3: https://i.imgur.com/cDgmkEC.jpg
                    description: 'Iterations of the knife guard include taking into account the multiple ways that a user may use a knife, whether through a chopping or a see-saw motion.',
                    route: '/documentation/knife-guard'
                },
                {
                    title: 'Plate CAD Model',
                    button: 'Plate',
                    link: 'https://i.imgur.com/TL8Bpsl.jpg',
                    description: 'Iterations of the plate design include accounting for stress development when dropped, heat dissipation when heated via microwave, and material properties after washed and exposed to the elements',
                    route: '/documentation/plate'
                },
                {
                    title: 'Utensil Adapter CAD Model',
                    button: 'Utensil Adapter',
                    link: 'https://i.imgur.com/WtW4SWk.jpg',
                    description: 'This was the proposed model of the mold that would be used in order to use an extruder to then press into a desired shape. However, after further consideration, iteration/prototyping upon this design was canceled.',
                    route: '/documentation/utensil'
                }
            ],

        }
    },
    methods: {
        next () {
        this.onboarding = this.onboarding + 1 === this.length
            ? 0
            : this.onboarding + 1
        },
        prev () {
            this.onboarding = this.onboarding - 1 < 0
            ? this.length - 1
            : this.onboarding - 1
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