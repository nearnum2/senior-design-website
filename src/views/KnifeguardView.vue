<template>
    <v-content>
        <v-container class="text-center mx-auto" fluid>
            <h3 class="display-1 font-weight-light pb-8">Morphological Charts and Concept Variants</h3>
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
                    <v-img src="https://i.imgur.com/8p8bd4Q.jpg"></v-img>
                </v-col>
                <v-col cols="6" class="text-left">
                    <v-img src="https://i.imgur.com/eDo5wVr.jpg"></v-img>
                </v-col>
                
                <v-col cols="6" class="text-right">
                    <v-row class="mb-4">
                        <v-card>
                            <v-card-title>How did we eliminate possibilities in design?</v-card-title>
                            <v-card-text>
                                Using the chart from above, we are able to go through different permutations and combinations 
                                of the different possibilities of design, considering them individually and then collectively,
                                identifying what may or may not work. All possibitlies are considered, regardless if it may have
                                sounded outlandish as itm ay have sounded or seemed.
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
                                The design incorporates an attachment to the knife handle which will be pin connected to a partially
                                see-through guard which can rotate about the pin, allowing for the user to place their fingers behind the guard
                                as they are cutting. The attachment would be able to fit to a varying size of the guard, allowing for easier access
                                and less hassle when purchasing the product
                            </v-card-text>
                        </v-card>
                    </v-row>
                </v-col>
                <v-col cols="3" class="text-right">
                    <v-img src="https://i.imgur.com/D0ob190.jpg"></v-img>
                </v-col>
                <v-col cols="3" class="text-right">
                    <v-img src="https://i.imgur.com/GhU5EoH.jpg"></v-img>
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
                            pin connected design, using two members that would allow for a more rotation. However, upon analysis, we arrived at the conclusion
                            that the stresses developed on the parts would lead to quick failure as well as a very unintuitive design. We then moved to a modified
                            pin shape design, allowing for rotation as well as chopping and rocking when cutting, but issues regarding wear and ease of design lead
                            us to iterate through to our current design, based off of a connecting pin from a water bottle handle, seen in the last slide.
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
              src: 'https://i.imgur.com/1N9uhLB.jpg',
            },
            {
              src: 'https://i.imgur.com/CdCsCUR.jpg',
            },
            {
              src: 'https://i.imgur.com/cDgmkEC.jpg',
            },
            {
              src: 'https://i.imgur.com/jOZIOgE.jpg',
            },
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