<template>
	<div class="lore-modal">
		<div class="lore-header-container">
			<div class="section-header clipped-medium-backward-bio">
				<img src="/icons/lore.svg" />
				<h1>BACKGROUND INFO</h1>
			</div>
			<div class="rhombus-back">&nbsp;</div>
		</div>
		<div class="lore">
			<div class="name">
				<h1>{{ lore.location }} // {{ lore.time }}</h1>
				<h2>{{ lore.title }}</h2>
			</div>
			<Markdown :source="lore.content" class="markdown" />
		</div>
	</div>
</template>

<script>
import Markdown from "vue3-markdown-it";

export default {
	name: "LoreModal",
	components: {
		Markdown,
	},
	props: {
		lore: {
			type: Object,
			required: true,
		},
	},
};
</script>
