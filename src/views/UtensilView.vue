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
                    <v-img src="https://i.imgur.com/6nYDquu.jpg"></v-img>
                </v-col>
                <v-col cols="6" class="text-left">
                    <v-img src="https://i.imgur.com/4w3F4lo.jpg"></v-img>
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
                    <v-img src="https://i.imgur.com/FbYUVEd.jpg"></v-img>
                </v-col>
                <v-col cols="3" class="text-right">
                    <v-img src="https://i.imgur.com/ZHPVH5P.jpg"></v-img>
                </v-col>
            </v-row>
            <v-divider class="my-5"></v-divider>
            <div class="text-center ">
                <h3>
                    After upon further consideration and advice, the team decided to not pursue the utensil holder as it was deemed that there
                    was already a large market that alleviated this issue and thus would be unable to provide an equivalent value to the market
                    in comparison to the other products. It is possible that, should another Senior Design team identify this as a possible 
                    project of interest, they may be able to use these as a starting point for research.
                </h3>
            </div>
            
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