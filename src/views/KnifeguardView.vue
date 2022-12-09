<template>
    <v-content>
        <v-container class="text-center mx-auto" fluid>
            <h3 class="display-1 font-weight-light pb-8">Morphological Charts, Concept Variants, and Prototypes</h3>
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
                            us to iterate through to our current design, based off of a connecting pin from a water bottle handle, seen in the fourth slide. We finally
                            ended at iteration 5, a design that incorporates the multiple movements (rotation, translation, and combination) using a rotating slider as
                            well as a rotation guard, all centered around using the same pin-lock design into the slots of the handle.
                        </v-card-text>
                    </v-card>
                </v-col>

                

                <v-col cols="6" class="text-left">
                    <v-card>
                        <v-card-title>
                            Final Prototype and Cost
                        </v-card-title>
                        <v-card-text>
                            The main method of manufacturing was through rapid prototyping by way of 3D printing. The first 
                            concern with the product was initial design and actual usage. The majority of Senior Design 2 was
                            spent redesigning, tweaking, re-printing, re-factoring calculations, and re-analyzing the product 
                            specifications. 

                        </v-card-text>
                        <v-card-text>

                            The main changes and adjustments made to the design, through iterations, are reflected in the previous 
                            section, the CAD Models. As for the rapid prototyping process, the biggest changes were related to the
                            dimensions of the product. Initial prototypes were bulky, loose, and uncomfortable to use. These were 
                            verified through ease-of-use tests, safety tests, and functional testing. For ease-of-use, the prototypes
                            were tested in first handling (grabbing and adjusting to the grip without vision, cleaning, etc.). Safety
                            tests were conducted in conjunction with functional testing by which the prototype was analyzed against
                            the design specifications and identifying whether they met the standards that were determined. Testing
                            included making sure the fingers could be placed naturally behind the knife guard without hassle, that
                            the fingers remained safe during ambidextrous re-attachment, and so on. For functional testing, design
                            specifications required that the product would be able to cut, to protect the fingers, to attach to the
                            knife handle, and would not break or degrade at any point during use.

                        </v-card-text>
                        <v-card-text>
                            In terms of the redesigns and reprints, the main concerns were the pin connection. Very often, either the
                            hole from the slot would shrink as it cooled or the pin would be only slightly larger than the slot due to
                            the cooling. Furthermore, in testing, it was found that the slider and the pin connection would be 
                            experiencing a numerable amount of wear and tear, resulting in the need for slight lubrication in the 
                            way of food-grade oil (olive oil, coconut oil, etc.). Lastly, in calculations, it was determined that the
                            guard need to be smaller as the original design resulted in generating too much stresses on the pin during
                            uses.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6" class="text-right">
                    <template>
                        <v-carousel>
                            <v-carousel-item
                            contain
                            v-for="(prototype,i) in prototypes"
                            :key="i"
                            :src="prototype.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                    </template>
                </v-col>
                <v-container>
                    <v-divider class="my-5"></v-divider>
                </v-container>
            </v-row>

            <div class="text-center">
                <h2>Testing and Calculations</h2>
                <h3 class="font-weight-regular text-left mt-4">
                    Below lists the testing and calculations portions of our knife guard, in order to validate the
                    design through Engineering, ensuring quality, functionality, and safety. Furthermore, some data
                    (qualitative or quantitative) will be shown below in order to ensure that on top of our product
                    being supported by engineering analysis and calculations, it is tested in real life application
                </h3>
            </div>

            <div 
            class="text-left pt-5"
            v-for="calculation in calculations"
            :key="calculation.calculation_type">
                <h3>{{calculation.calculation_type}}</h3>
                <v-row>
                    <v-col 
                    cols="6" 
                    >
                        <div 
                        v-for="ex in calculation.explanation"
                        :key="ex"
                        class="my-2">     
                         {{ex}}
                        </div>
                    </v-col>
                    <v-col cols="6">
                        <template>
                            <v-carousel>
                                <v-carousel-item
                                contain
                                v-for="(image,i) in calculation.images"
                                :key="i"
                                :src="image.src"
                                reverse-transition="fade-transition"
                                transition="fade-transition"
                                ></v-carousel-item>
                            </v-carousel>
                        </template>
                    </v-col>
                </v-row>
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
            {
                src: 'https://i.imgur.com/UX94KLY.jpg'
            },
          ],
          prototypes: [
            {
                src: 'https://i.imgur.com/g1LYNzS.jpg'
            },
            { src: 'https://i.imgur.com/OOHmnK9.jpg'}
            
          ],
          calculations: [
            {
                calculation_type: 'Pin Stress Analysis',
                explanation:  [`One of the main issues that was brought to the team's attention in Senior Design 1 was 
                the amount of stress that would end up developing in the pin. Specifically, the stress due to rotation
                as well as the stress due to shear, since the guard would be moving in conjuction with the pin and the
                fingers of the user. Because of this, through the use of Statics, Mechanics of Solids, and FEA, the team
                was able to devise a way to accurately determine the stress development which was later validated through
                Finite Element Analysis.`,
                `The problem is defined in such a way to determine what the stresses are in the pin when a sudden impact
                is performed on the guard. For example, a sudden jerk forward or in any direction. What kind of stresses
                develop from this kind of movement?`,
                `This is done by making a few assumptions, then applying the principles of Statics to identify forces, 
                Mechanics of Solids to identify stresses, and FEA to validate those values.`, `It is through these 
                calculations that we were able to verify that the maximum stress development is around 144 psi while
                the yield strength of 3D Printed PLA is around 3000-4000 psi, validating that our pin is valid through
                engineering calculations`],
                images: [
                    { src: 'https://i.imgur.com/ZXcfwYE.jpg'},
                    { src: 'https://i.imgur.com/5Q3rLce.jpg'},
                    { src: 'https://i.imgur.com/bBjKNSQ.jpg'},
                    { src: 'https://i.imgur.com/nD73trN.jpg'},
                    { src: 'https://i.imgur.com/ifZUyuI.jpg'},
                    { src: 'https://i.imgur.com/v1nbJGE.jpg'},
                ]
            },
            {
                calculation_type: 'DFMEA of Knife Guard',
                explanation: [
                    `In designing the products, the team must also consider any and all possible things that could go wrong with
                    the product and analyze/identify to what extent are they catastrophic or dangerous to the end user/customer. 
                    Through this chart, the team is able to best identify what parts of design to optimize and focus on while 
                    being able to allow some failures since no product may be perfect. This chart is shown to the right.`
                ],
                images: [
                    { src: 'https://i.imgur.com/2AEChRS.jpg'}
                ]
            }
          ]
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