<template>
	<section id="lore" :class="{ animate: animate }" class="section-container">
		<div style="height: 52px; overflow: hidden">
			<div class="section-header clipped-medium-backward-lore">
				<img src="/icons/lore.svg" />
				<h1>Background Information</h1>
			</div>
			<div class="rhombus-back">&nbsp;</div>
		</div>
		<div class="section-content-container">
			<div class="lore-list-container">
				<Lore
				  v-for="item in lore"
				  :key="item.title"
				  :lore="item"
				  :animate="animate" />
			</div>
		</div>
	</section>
</template>

<script>
import Markdown from "vue3-markdown-it";
import Lore from "@/components/Lore.vue";

export default {
	components: {
		Markdown,
		Lore,
	},
	props: {
		animate: {
			type: Boolean,
			required: true,
		},
		lore: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {};
	},
};
</script>
