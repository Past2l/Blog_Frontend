<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.introduce.name}의 블로그</title>
	<meta name="description" content="{data.introduce.name}의 블로그에 오신 것을 환영합니다" />
	<meta property="og:type" content="website" />
  <meta property="og:url" content="/" />
  <meta property="og:title" content="{data.introduce.name}의 블로그" />
  <meta property="og:description" content="{data.introduce.name}의 블로그입니다." />
  <meta property="og:image" content="/favicon.png" />
  <meta property="og:locale" content="ko_KR" />
  <meta name="twitter:card" content="website" />
  <meta name="twitter:title" content="{data.introduce.name}의 블로그" />
  <meta name="twitter:description" content="{data.introduce.name}의 블로그입니다." />
  <meta name="twitter:image" content="/favicon.png" />
  <link rel="canonical" href="https://dohyun.it" />
</svelte:head>

<section>
	<!-- TODO -->
</section>

<style>
</style>
