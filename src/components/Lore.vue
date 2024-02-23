<template>
	<div class="Lore">
		<div class="name">
			<h1>{{ lore.location }} // {{ lore.time }}</h1>
			<h2>{{ lore.title }}</h2>
		</div>
		<img class="thumbnail" :src="lore.thumbnail" />
		<div class="preview">
			{{ getPreview }}
		</div>
		<a @click.prlore="loreModal">Read More</a>
	</div>
</template>

<script>
import loreModal from "@/components/modals/LoreModal.vue";

import Markdown from "vue3-markdown-it";
import removeMd from "remove-markdown";

export default {
	name: "Lore",
	components: {
		Markdown,
		loreModal,
	},
	props: {
		lore: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			removeMd,
		};
	},
	computed: {
		getPreview() {
			return this.removeMd(this.lore.content).substring(0, 200) + "...";
		},
	},
	methods: {
		LoreModal() {
			this.$oruga.modal.open({
				component: LoreModal,
				custom: true,
				trapFocus: true,
				props: {
					lore: this.lore,
				},
				class: "custom-modal",
				width: 1920,
			});
		},
	},
};
</script>
