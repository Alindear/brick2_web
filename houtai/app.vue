<template>
    <div>
        <router-view :key="key"></router-view>
    </div>
</template>

<script>
export default {
	data() {
		return {
			key: new Date().getTime(),
		};
	},
	watch: {
		key: function () {
			this.key = new Date().getTime();
			console.log('this.key', this.key);
		},
	},
};
</script>

<style>
h1 {
	font-size: 100px;
}
</style>


