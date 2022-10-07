<template>
  <div class="home">
    <v-content class="pt-0">
      <v-container class="text-left mx-auto" fluid>
        <v-row class="pb-5">
          <v-col cols="6" class="text-left pt-4">
            <h3 class="display-1 font-weight-light pb-4">Team 1: Next<strong class="font-weight-medium">Gen</strong> Solutions</h3>
            <v-list-item two-line v-for="member in members" :key="member.name">
              <v-list-tem-content>
                <v-list-item-title>{{member.name}}</v-list-item-title>
                <v-list-item-subtitle>{{member.position}}</v-list-item-subtitle>
              </v-list-tem-content>
            </v-list-item>
          </v-col>
          <v-col cols=6 class="text-right">
            <v-img contain src="https://i.imgur.com/WnV21Hz.jpg" style="height: 316px; width: 719px" class="pb-0 pt-5"></v-img>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="mt-5">
          <v-spacer></v-spacer>
          <v-col cols="6">
            <v-card class="mb-5">
              <v-card-title class="text-center">
                Welcome!
              </v-card-title>
              <v-card-text>
                <h4>
                  We are Marvin, Danna, Nina, and Melanie, and we are Team 1 - NextGen Solutions. Throughout the Spring and Fall 2022, our team will be working on Assistive Utensils, a project proposed to aid those who suffer from disabilities and have a difficult time completing daily life activities such as holding utensils, using a kitchen knife, or using a plate. Our goal is to improve the quality of life by designing day to day assistive tools that allow an individual to become self-sufficient. Furthermore, our team is actively working on several assistive utensils that include a knife safety device, a utensil holder, and a stable plate/bowl combination.
                </h4>
              </v-card-text>
            </v-card>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-divider></v-divider>
        <h3 class="display-1 font-weight-light pb-4 mt-5 text-center">What Products Exist in the Market?</h3>
        <v-container>
          <v-row class="mb-5">
          <v-col cols="4"  v-for="competitor in competitors" :key="competitor.name">
            <v-card class="justify-center">
              <v-card-title style="justify-content: center;">
                {{competitor.name}}
              </v-card-title>
              <v-container>
                <v-img contain :src='competitor.url' style="height:158px; width:360px; justify-content: center;"></v-img>
              </v-container>
              <v-card-text>
                <v-list-item>
                  <v-list-item-content>
                    {{competitor.text1}}
                  </v-list-item-content>
                  <v-list-item-content>
                    {{competitor.text2}}
                  </v-list-item-content>
                </v-list-item>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        </v-container>
        <v-row class="mb-5">
          <v-col cols="4"  v-for="competitor in competitors" :key="competitor.name">
            <v-card class="justify-center">
              <v-card-title style="justify-content: center;">
                {{competitor.name}}
              </v-card-title>
              <v-container>
                <v-img contain :src='competitor.url' style="height:158px; width:360px; justify-content: center;"></v-img>
              </v-container>
              <v-card-text>
                <v-list-item>
                  <v-list-item-content>
                    {{competitor.text1}}
                  </v-list-item-content>
                  <v-list-item-content>
                    {{competitor.text2}}
                  </v-list-item-content>
                </v-list-item>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <h3 class="display-1 font-weight-light pb-4 mt-5 text-center">What Solutions Do We Propose?</h3>
        <v-container>
          <v-row class="mb-5">
          <v-col cols="4"  v-for="solution in solutions" :key="solution.name">
            <v-card>
              <v-row>
                <v-col cols="6" class="text-left">
                  <v-card-title>
                    {{solution.name}}
                  </v-card-title>
                </v-col>
                <v-col cols="6" class="text-right">
                  <v-img :src="solution.image" contain style="width:1890.2px; height: 100px"></v-img>
                </v-col>
              </v-row>
              <v-img></v-img>
              <v-card-text>
                {{solution.description}}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        </v-container>
        <v-row class="mb-5">
          <v-col cols="4"  v-for="solution in solutions" :key="solution.name">
            <v-card>
              <v-row>
                <v-col cols="4" class="text-left">
                  <v-card-title>
                    {{solution.name}}
                  </v-card-title>
                </v-col>
                <v-col cols="8" class="text-right">
                  <v-img :src="solution.image" contain style="width:1890.2px; height: 100px"></v-img>
                </v-col>
              </v-row>
              <v-img></v-img>
              <v-card-text>
                {{solution.description}}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <h3 class="display-1 font-weight-medium pb-4 mt-5 text-center">Where do we go from here?</h3>
        <h3 class="front-weight-light pb-4 mt-5 text-center">
          In Senior Design 2, we will continue to work on the design, iterating through and providing
          as many prototypes. This will allow us to deliver the most optimal product after considering all possible
          combinations. Please click below to continue on and see the progress through out prototyping and testing process
        </h3>
        <v-container class="text-center">
          <v-btn rounded class="white--text" color="#1D7290" router to="/documentation">Prototypes and Testing</v-btn>
        </v-container>
      </v-container>
    </v-content>
    
    <h1>
      This is the Home Page
    </h1>
    
    <p class="red white--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A error sint nostrum est ad voluptatem inventore tempora nemo vero corrupti. Explicabo exercitationem facere facilis impedit cupiditate voluptates, pariatur repellat? Delectus.</p>
    <p class="pink lighten-4 red--text--darken-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. A error sint nostrum est ad voluptatem inventore tempora nemo vero corrupti. Explicabo exercitationem facere facilis impedit cupiditate voluptates, pariatur repellat? Delectus.</p>  
    <h1 class="display-4">display-4</h1>
    <h4 class="display-1">display-1 </h4>
    <p class="headline">this is what headline looks like </p>
    <p class="subheading">subheading</p>
    <p class="caption font-italic">caption</p>
    <v-btn class="pink lighten-4 white--text--darken-4">click me</v-btn>
    <v-btn depressed dark color="pink"> depressed dark colored button</v-btn>
    <v-btn text="flat">testing flat button</v-btn>
    
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      fullWidthImage: null,
      members: [
        {
          name: 'Danna Capitanachi',
          position: 'Team Leader/Lead Designer'
        },
        {
          name: 'Nina San Pedro',
          position: 'Meeting Scribe/Design Consultant'
        },
        {
          name: 'Melanie Suarez',
          position: 'Quality Assurance Engineer'
        },
        {
          name: 'Marvin Ninal',
          position: 'Technical Consultant'
        }
      ],
      contents: [
        {
          name: 'team photo',
          url: 'https://i.imgur.com/WnV21Hz.jpg'
        },
        {
          name: 'competitor products',
          url: 'https:/i.imgur.com/NCeIzxH.jpg'
        }
      ],
      competitors: [
        {
          name: 'Folks Kitchenware Knife',
          url: 'https://i.imgur.com/lYKEDNG.jpg',
          text1: 'Retractable Guard that acts as an anchor',
          text2: 'Tactile guard that guides the finger through the cutting process'
        },
        {
          name: 'Caregiver Products',
          url:'https://i.imgur.com/BtmQyiv.jpg',
          text1: 'Vacuum Pad Base that will not move',
          text2: 'Dividers and scoop angles, allowing for easier scooping and preventing spillage'
        },
        {
          name: 'Dining with Dignity',
          url:'https://i.imgur.com/NCeIzxH.jpg',
          text1: 'Provides people with limited hand dexterity a comfortable grip and freedom of movement',
          text2: 'Adjustable 2-ring assembly for the thumb and index finger'
        }
      ],
      solutions: [
        {
          name: 'Knife Guard',
          image: 'https://i.imgur.com/LxSiT7P.jpg',
          description: 'The initial knife guard attachment included a rotating component that would allow for the user to chop. It would attach the handle of the knife, allowing for it to be attached to varying size of handles. Furthermore, a slider is attached near the bottom end of the guard, allowing for a back-and-forth cutting motion while keeping the guard relatively steady and still.'
        },
        {
          name: 'Plate',
          image: 'https://i.imgur.com/VvNxbP5.jpg',
          description: 'The initial plate prototype design includes curved sides, allowing for easier scooping when an individual may not have access to another limb. A portion of the plate also contains ridges that hold meat in place, allowing for easier cutting. Lastly, a non-slip liner coats the bottom of the plate to reduce the chances of spilling due to movement.',
        },
        {
          name: 'Utensil Holder',
          image: 'https://i.imgur.com/cKohGDr.jpg',
          description: 'The current utensil holder prototype design consists of cross-shaped holes on an elastic band in order to accomodate for different shapes of utensils, targeting a universal design.This product also incorporates a snap-and-lock button mechanism and a flexible body in order to allow for all hand sizes to be compatible with the assistive utensil holder.'
        }
      ]
    }
  },
  methods: {
    getImageClass: function (i) {
      return {
        'fullWidthImage': this.fullWidthImageIndex === i
      };
    },
    onImageClick: function(i){
      if (this.fullWidthImageIndex === i) {
        this.fullWidthImageIndex = null;
      }
      else{
        this.fullWidthImageIndex = i;
      }
    }
  }
}
</script>
