<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h4>The score is {{ average }}</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-row>
          <v-col cols="6">
            <p>Name</p>
          </v-col>
          <v-col cols="6">
            <p>num</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
        <p>Score</p>
      </v-col>
      <v-col cols="5">
        <p>Weight</p>
      </v-col>
    </v-row>
    <v-row align="center" v-for="(item, index) in scores" :key="index">
      <v-col cols="2">
        <v-row>
          <v-col cols="6">
            <p>{{ item.name }} (x {{ item.numberOfItems }})</p>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="item.numberOfItems"></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
        <v-row align="center">
          <v-col cols="6">
            <v-slider min="0" :max="item.max" v-model="item.score"></v-slider>
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="item.score" type="number"></v-text-field>
          </v-col>
          <v-col cols="3"
            >{{ Math.round((item.score / item.max) * 100) }}%</v-col
          >
        </v-row>
      </v-col>
      <v-col cols="5">
        <v-row class="align-center">
          <v-col cols="9">
            <v-slider min="0" max="100" v-model="item.weight"></v-slider>
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="item.weight" type="number"></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h4>The score is {{ average }}</h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => {
    return {
      elevation: 1,
      scores: [
        {
          name: "Quiz",
          score: 8,
          max: 10,
          weight: 10,
          numberOfItems: 22,
        },
        {
          name: "Inception Report",
          score: 9.23,
          max: 15,
          weight: 15,
          numberOfItems: 1,
        },
        {
          name: "Project Management Plan",
          score: 10,
          max: 15,
          weight: 15,
          numberOfItems: 1,
        },
        {
          name: "Design Plan",
          score: 10,
          max: 15,
          weight: 15,
          numberOfItems: 1,
        },
        {
          name: "Final",
          score: 23,
          max: 40,
          weight: 40,
          numberOfItems: 1,
        },
      ],
    };
  },
  computed: {
    average() {
      let totalScore = 0;
      let totalWeight = 0;
      this.scores.forEach((score) => {
        totalWeight = totalWeight + score.weight * score.numberOfItems;
        const averageScore = (score.score / score.max) * 100;
        console.log(`The average for ${score.name} is ${averageScore}`);
        totalScore =
          totalScore + averageScore * score.weight * score.numberOfItems;
      });
      return totalScore / totalWeight;
    },
  },
};
</script>
