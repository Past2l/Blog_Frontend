<script>
	import PageWrapper from '../components/PageWrapper.svelte';
	import { logout } from '../modules/user';
	import { theme } from '../store/theme';
	import { user } from '../store/user';

	let accountClick = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<header>
	<PageWrapper>
		<div class="wrapper">
			<a href="/" title="홈으로 이동">
				<img class="icon profile" src="/favicon.png" alt="icon" />
			</a>
			<div class="header-icons">
				<a class="header-btn" href="/search" title="글 검색">
					<img class="svg icon" src="/icons/search.svg" alt="search" />
				</a>
				{#if $user && $user.owner}
					<a class="header-btn only-pc" href="/post" title="글 업로드">
						<img class="svg icon" src="/icons/post.svg" alt="post" />
					</a>
				{/if}
				<div
					class="header-btn"
					title="{$theme == 'dark' ? '밝은' : '어두운'} 화면으로 변경"
					on:click={() => {
						theme.set($theme == 'dark' ? 'light' : 'dark');
					}}
				>
					<img
						class="svg icon"
						src="/icons/{$theme == 'dark' ? 'light' : 'dark'}.svg"
						alt={$theme == 'dark' ? 'light' : 'dark'}
					/>
				</div>
				{#if !$user}
					<a class="header-btn" href="/login" title="로그인">
						<img class="svg icon" src="/icons/login.svg" alt="login" />
					</a>
				{:else}
					<div>
						<div class="header-btn" on:click={() => (accountClick = !accountClick)} title="계정">
							<img class="svg icon" src="/icons/account.svg" alt="account" />
						</div>
						{#if accountClick}
							<div class="account-wrapper">
								<div class="account">
									<a
										href="/post"
										on:click={() => (accountClick = false)}
										class="account-button only-mobile"
									>
										글 작성
									</a>
									{#if $user.owner}
										<a href="/history" on:click={() => (accountClick = false)}>
											<div class="account-button">통계</div>
										</a>
									{/if}
									<a href="/setting" on:click={() => (accountClick = false)}>
										<div class="account-button">설정</div>
									</a>
									<div class="account-button" on:click={logout}>로그아웃</div>
								</div>
							</div>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</PageWrapper>
</header>
<PageWrapper />

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

	.svg {
		filter: var(--svg);
	}

	.header-icons {
		display: flex;
		align-items: center;
		list-style: none;
		gap: 16px;
		position: relative;
	}

	.icon {
		display: flex;
		align-items: center;
		width: 36px;
		height: 36px;
	}

	.account-wrapper {
		position: absolute;
		top: 100%;
		margin-top: 1.25rem;
		right: 0px;
	}

	.account {
		position: relative;
		z-index: 5;
		width: 11rem;
		border-radius: 8px;
		background: var(--background);
		box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
	}

	.account-button {
		padding: 1rem 1.5rem;
		cursor: pointer;
		color: var(--text);
	}

	.only-mobile {
		display: none;
	}

	@media (max-width: 768px) {
		.wrapper {
			padding-inline: 20px;
			padding-inline-start: 28px;
		}
		.header-icons {
			gap: 8px;
		}

		.only-pc {
			display: none;
		}

		.only-mobile {
			display: block;
		}
	}
</style>
