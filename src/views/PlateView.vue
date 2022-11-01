<template>
    <v-content>
        <v-container class="text-center mx-auto" fluid>
            <h3 class="display-1 font-weight-light pb-8">Morphological Charts, Concept Variants, Models, and Designs</h3>
            <v-row>
                <v-col cols="6" class="text-left">
                    <v-row class="mb-4">
                        <v-card>
                            <v-card-title>Why did we do this?</v-card-title>
                            <v-card-text>
                                We have considered many different possibilites of design and eliminating the less optimal
                                way to solve the problem at hand. Listing through the different possibilities and going through
                                unique combinations and pitting it against the values we seek in our product lead us to narrowing
                                down until we get to a few optimal designs. Shown on the right, you can see the documentation 
                                regarding that elimination process
                            </v-card-text>
                            <v-card-text>
                                Furthermore, you can see that, after the elimination process, we were able to arrive at a few possible
                                variants that may work and solve our problem
                            </v-card-text>
                        </v-card>
                    </v-row>
                </v-col>
            
                <v-col cols="6" class="text-right">
                    <v-img src="https://i.imgur.com/57lo3Zn.jpg"></v-img>
                </v-col>
                <v-col cols="6" class="text-left">
                    <v-img src="https://i.imgur.com/E0QmcN4.jpg"></v-img>
                </v-col>
                
                <v-col cols="6" class="text-right">
                    <v-row class="mb-4">
                        <v-card>
                            <v-card-title>How did we eliminate possibilities in design?</v-card-title>
                            <v-card-text>
                                Using the chart from above, we are able to go through different permutations and combinations 
                                of the different possibilities of design, considering them individually and then collectively,
                                identifying what may or may not work. All possibitlies are considered, regardless if it may have
                                sounded outlandish as it may have sounded or seemed.
                            </v-card-text>
                            <v-card-text>
                                This allows us to more accurately and confidently be sure of the different design concepts and variants
                                before modeling and producing prototypes for testing and use.
                            </v-card-text>
                        </v-card>
                    </v-row>
                </v-col>
                <v-col cols="6" class="text-left">
                    <v-row>
                        <v-card>
                            <v-card-title>Proof of Concept</v-card-title>
                            <v-card-text>
                                This leads us to create a miniature prototype in order to conceptualize and visualize our initial design,
                                shown on the right
                            </v-card-text>
                            <v-card-text>
                                The design incorporates the values and functions that we had listed above, specifically creating a plate that would have sloping slides and a
                                pronounded lip on a third of the plate. Shown on the right, there would also be tiny ridges that would aid in holding the food down when cutting 
                                the product, separated from the rest of the compartments via a removable, curved plate divider. Lastly, the bottom would be coated with a material
                                that has a high coefficient of friction, allowing for the plate to remain stationary regardless of movement
                            </v-card-text>
                        </v-card>
                    </v-row>
                </v-col>
                <v-col cols="3" class="text-right">
                    <v-img src="https://i.imgur.com/wyWWW3X.jpg"></v-img>
                </v-col>
                <v-col cols="3" class="text-right">
                    <v-img src="https://i.imgur.com/7xxQDCd.jpg"></v-img>
                </v-col>
                <v-col cols="6" class="text-right">
                    <template>
                        <v-carousel>
                            <v-carousel-item
                            contain
                            v-for="(item,i) in items"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                    </template>
                </v-col>
                <v-col cols="6" class="text-left">
                    <v-card>
                        <v-card-title>CAD Models</v-card-title>
                        <v-card-text>
                            Over the summer and in Senior Design 2, we designed and modeled the guard in SOLIDWORKS in order to visualize the
                            dimensions and design of the product as well as to be 3D printed. 
                        </v-card-text>
                        <v-card-text>
                            As you can see from the slides on the left, you can see that the team went through different iterations, incorporating the initial
                            design of using a divider. However, the differences are not so apparently, especially on SOLIDWORKS. The changes have been in the
                            manufacturing process of the plate. The initial process would be using a mold in order to create a polypropylene plate that would 
                            then be dip coated to provide the slip-resistant base. The divider would then be 3D printed with a matching mechanism built
                            into the plate to allow for ease of removal.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            
        </v-container>
    </v-content>


</template>




<script>
    export default {
      data () {
        return {
          items: [
            {
                src: 'https://i.imgur.com/04cdiVu.jpg'
            },
            {
                src: 'https://i.imgur.com/eM02R0R.jpg',
            },
            {
                src: 'https://i.imgur.com/MNvIhcr.jpg',
            }
          ],
        }
      },
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