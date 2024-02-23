<template>
  <div class="mission" :class="[{ active: isActive }, mission.status]">
    <div class="name">
      <h1>Mission // {{ mission.slug }}</h1>
      <h2>{{ mission.name }}</h2>
    </div>
    <div class="status" :class="mission.status">
      {{ missionStatus }}
      <img :src="icon" />
    </div>
  </div>
</template>

<script>
/*ADD h3 IN THE TEMPLATE SO WE CAN JUST READ IT AS TEXT AND NOT A CLASS DEFINITION*/
export default {
  components: {},
  props: {
    mission: {
      type: Object,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  computed: {
    icon() {
      return `/icons/mission-${this.mission.status}.svg`;
    },
    missionStatus() {
      /* 
      Keeping this old code to teach others to not go on these decadent paths.
      
      if (this.mission.status === "start") return "Current\nBriefing"; 
      if (this.mission.status === "partial-success") return "Partial\nSuccess";
      if (this.mission.status === "success") return "Mission\nSuccess";
      if (this.mission.status === "failure") return "Mission\nFailure"; */
      if (this.mission.status) return "Mission\n" + this.mission.status;
	  
    },
    isActive() {
      return this.mission.slug === this.selected;
    },
  },
};
</script>
