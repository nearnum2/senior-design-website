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

                <v-col cols="6" class="text-left">
                    <v-card>
                        <v-card-title>
                            Prototypes
                        </v-card-title>
                        <v-card-text>
                            Because we had kept the main design from Senior Design 1, there was not much in the way
                            of redesigns as much as there were more slight tweaks to the overall attributes of the 
                            plate. For example, through each iteration of the product, the plate was gradually
                            made larger and heavier due to more PLA material being required to manufacture the
                            prototype. Furthermore, another issue that was realized only recently near the end of 
                            Senior Design 2 was that polypropylene was notoriously difficult to 3D print. Lastly,
                            as far as minor changes go, the largest minor change related to the molding. 
                        </v-card-text>
                        <v-card-text>
                            In order to ensure that the prototype would adhere to a flat surface, the bottom would
                            need to be coated with a silicone rubber base that restricts any translational movement.
                            The main iterations of these molds was shown such that the initial mold to generate the
                            intial prototype for the midterm presentation was a simple square-like shape, with no
                            draft angle. Further iterations would lead to eventually using a gradually sloped mold
                            as well as switching the material to TPU (though this would have its own set of issues)
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
                        v-for="ex in calculation.explanations"
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
                src: 'https://i.imgur.com/04cdiVu.jpg'
            },
            {
                src: 'https://i.imgur.com/eM02R0R.jpg'
            },
            {
                src: 'https://i.imgur.com/MNvIhcr.jpg'
            }
          ],
          prototypes: [
            { src: 'https://i.imgur.com/4XiW0WO.jpg' },
          ],
          calculations: [
            {
                calculation_type: 'Static Stability of Plate',
                explanations: [`One major demand from our design specification was that the plate remain statically
                stable throughout its duration of usage. This would be related to and a function of the plates
                overall weight, the friction generated by the silicone rubber base, and the dimensions of the plate.
                This is particularly important as its functionality and ability to remain statically stable is
                the main point of this product in order to withstand rotation/tipping during usage as well as 
                any sort of translational movement.`],
                images: [
                    {src: 'https://i.imgur.com/sksnnSA.jpg'},
                    {src: 'https://i.imgur.com/hN2HBTO.jpg'},
                ],
            },
            {
                calculation_type: 'Plate Impact Strength from Falling',
                explanations: [`Another major demand of our product is that it must be long-lasting and impact-resistant.
                The long-lasting is obvious as a product that would fail upon further use would be an issue both for 
                the customer due to money concerns as well as design concerns. This would be solved by the careful
                material choice as well as design choices made in this product. For impact-resistance, this would be
                alleviated only by material selection and a slight bias towards the dimensional design of the 
                product. As can be seen in the calculations, the main point of error and failure is the lip.`,`Validated
                through FEA, a vertical drop test would show that there will be a deformation of ~2 mm when dropped at 
                the lip from a height of 10 ft, and around half as much deformation at half the height. It
                was determined that the deformation was not a major cause of worry. As for impact resistance, however,
                it was shown that the impact would be a possible worry. This is because, according to the vertical drop
                simulation, the product would possible fail, generating a peak stress of 31.89 MPa while the yield strength
                of Polypropylene is reported in the range of 30-40 MPa.`, `This is worrying and the team is currently in the 
                process of trying to reduce this impact. Ideas currently range from making the walls/lip thicker, making the
                lip more gradual in its shape to outright sticking with PLA, though issues arise in terms of food-grade safety
                and material wear and tear.`],
                images: [
                    {src: 'https://i.imgur.com/cwcKTrR.jpg'},
                    {src: 'https://i.imgur.com/PGocveN.jpg'},
                    {src: 'https://i.imgur.com/IIJqAIB.jpg'},
                    {src: 'https://i.imgur.com/g9mOY1f.jpg'},
                    {src: 'https://i.imgur.com/XxSJfCs.jpg'},
                    {src: 'https://i.imgur.com/2l3Tn0Y.jpg'},
                ]
            },
            {
                calculation_type: 'Sharpness/Surface Hardness of Plate',
                explanations: [`An issue that could come up with our product is also its peformance in cutting. After all, 
                when eating anything off a plate, it is very often that you would be cutting with a knife in order to 
                slice some food into smaller chunks. Because of this, it is important to study and qualitatively measure the
                different materials from the material selection portion and pit them against their performance against a 
                sharp knife and a serrated knife.`, `Shown to the right are the samples after being cut 1 time, 5 times, then 20 times
                in order to show the damage that is sustained by each different material selection. It is shown in the order of 
                HDPE, PLA, and Polypropylene while it is cut from left to right with a serrated knife and a sharp knife.`],
                images: [
                    { src: 'https://i.imgur.com/c2r7Y9O.jpg' },
                    { src: 'https://i.imgur.com/1rsqgZM.jpg' },
                    { src: 'https://i.imgur.com/R63x0V1.jpg' },
                    
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