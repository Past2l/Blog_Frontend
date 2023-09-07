<script>
	import PageWrapper from '../components/PageWrapper.svelte';
	import { logout } from '../module/user';
	import { theme } from '../store/theme';
	import { user } from '../store/user';
</script>

<header>
	<PageWrapper>
		<div class="wrapper">
			<a class="icon-36" href="/" title="홈으로 이동">
				<img class="profile icon-36" src="/favicon.png" alt="icon" />
			</a>
			<ul>
				<a class="header-btn" href="/search" title="글 검색">
					<li>
						<img class="svg icon-36" src="/icons/search.svg" alt="search" />
					</li>
				</a>
				{#if $user && $user.owner}
					<a class="header-btn only-pc" href="/post" title="글 업로드">
						<li>
							<img class="svg icon-36" src="/icons/post.svg" alt="post" />
						</li>
					</a>
					<a class="header-btn only-pc" href="/history" title="방문 기록">
						<li>
							<img class="svg icon-36" src="/icons/history.svg" alt="history" />
						</li>
					</a>
				{/if}
				{#if $user}
					<a class="header-btn" href="/setting" title="설정">
						<li>
							<img class="svg icon-36" src="/icons/setting.svg" alt="setting" />
						</li>
					</a>
				{/if}
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					class="header-btn"
					href=""
					title="{$theme == 'dark' ? '밝은' : '어두운'} 화면으로 변경"
					on:click={() => {
						theme.set($theme == 'dark' ? 'light' : 'dark');
					}}
				>
					<li>
						<img
							class="svg icon-36"
							src="/icons/{$theme == 'dark' ? 'light' : 'dark'}.svg"
							alt={$theme == 'dark' ? 'light' : 'dark'}
						/>
					</li>
				</a>
				{#if !$user}
					<a class="header-btn" href="/login" title="로그인">
						<li>
							<img class="svg icon-36" src="/icons/login.svg" alt="login" />
						</li>
					</a>
				{:else}
					<a class="header-btn" href="#logout" on:click={logout} title="로그아웃">
						<li>
							<img class="svg icon-36" src="/icons/logout.svg" alt="logout" />
						</li>
					</a>
				{/if}
			</ul>
		</div>
	</PageWrapper>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		display: flex;
		justify-content: space-between;
		height: 60px;
		background: var(--background);
		box-shadow: 0 4px 20px rgba(96, 96, 96, 0.25);
		z-index: 5;
	}

	.wrapper {
		padding-inline: 40px;
		padding-inline-start: 48px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}

	.profile {
		border-radius: 8px;
	}

	.icon-36 {
		width: 36px;
		height: 36px;
	}

	.svg {
		filter: var(--svg);
	}

	ul {
		display: flex;
		align-items: center;
		list-style: none;
		gap: 16px;
		padding-inline-start: 0px;
	}

	li {
		display: flex;
		align-items: center;
	}

	@media (max-width: 768px) {
		.wrapper {
			padding-inline: 20px;
			padding-inline-start: 28px;
		}
		ul {
			gap: 8px;
		}

		.only-pc {
			display: none;
		}
	}
</style>
