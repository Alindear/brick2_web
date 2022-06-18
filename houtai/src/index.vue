<template>
    <div class="app_main">
        <div class="header_top">
            <head-er type="index"></head-er>
        </div>
        首页
    </div>
</template>

<script>
import headEr from './components/header.vue';
export default {
	components: { headEr },
	data() {
		return {};
	},

	methods: {},
};
</script>

<style lang="less" scoped>
.app_main {
	height: 100%;
	width: 100%;
	font-size: 0.16rem;
}
</style>