





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-FG+rXqMOivrAjdEQE7tO4BwM1poGmg70hJFTlNSxjX87grtrZ6UnPR8NkzwUHlQEGviu9XuRYeO8zH9YwvZhdg==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-146fab5ea30e8afac08dd11013bb4ee0.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-bqIvTjrYM8hmo8Y7y5fzsxn+OAFrHWG6byMAbBSM9qFe8NQymQqFeBaF2MGvAwy7x2s4bnzXE5bDGHnrQjtoQQ==" rel="stylesheet" href="https://github.githubassets.com/assets/github-6ea22f4e3ad833c866a3c63bcb97f3b3.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>d3-timeline/d3-timelines.js at master · denisemauldin/d3-timeline</title>
    <meta name="description" content="D3 timeline. Contribute to denisemauldin/d3-timeline development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars3.githubusercontent.com/u/196261?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="denisemauldin/d3-timeline" /><meta name="twitter:description" content="D3 timeline. Contribute to denisemauldin/d3-timeline development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/196261?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="denisemauldin/d3-timeline" /><meta property="og:url" content="https://github.com/denisemauldin/d3-timeline" /><meta property="og:description" content="D3 timeline. Contribute to denisemauldin/d3-timeline development by creating an account on GitHub." />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NDk1MTkyNDc4OjRkMzdhNDIyOTQ5N2QzMzJiZGYwYTEwMmJmM2NiN2NiYWZlOTJkOGJjNjM3YWYyYzFlYjk1Yjc0ZjQwMGZmMDk=--20ed99cc3b2d754f18d51195c33df7cfdd2376e9">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

  <meta name="request-id" content="E6A2:5F5A:5065CC:76655A:5EA3385A" data-pjax-transient="true" /><meta name="html-safe-nonce" content="071023005ff7a37ad8e8d625ea9a59dbbd2d75f4" data-pjax-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9kZW5pc2VtYXVsZGluL2QzLXRpbWVsaW5lL3RyZWUvbWFzdGVyL2Rpc3QiLCJyZXF1ZXN0X2lkIjoiRTZBMjo1RjVBOjUwNjVDQzo3NjY1NUE6NUVBMzM4NUEiLCJ2aXNpdG9yX2lkIjoiNDYyODE2OTI5NjE0OTI1OTAiLCJyZWdpb25fZWRnZSI6ImlhZCIsInJlZ2lvbl9yZW5kZXIiOiJpYWQifQ==" data-pjax-transient="true" /><meta name="visitor-hmac" content="64c69dfdc66af3a0e9c8286dc5c1587598372923bde2d4834ed40ab53099ea0f" data-pjax-transient="true" />



  <meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient="true" />

  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-actor-id" content="31630735" /><meta name="octolytics-actor-login" content="sethsch" /><meta name="octolytics-actor-hash" content="15548a1e7ebf15eb9447dc1db7c745e3e19b0b6e90f9729eb59ddc162cb4fd0b" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="18b7234f83142a71d9c532ae0de1b25a">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="sethsch">

      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="YjBhNjZlYWFhMmE2MTY2MzJiMGQ5YTA3Njc4NGIwNTAxMTVhODZkYjdhMGEwNTVjNmYyZWJmOTQ3YTIzNDdlMHx7InJlbW90ZV9hZGRyZXNzIjoiMjQuMTAyLjgxLjI1MyIsInJlcXVlc3RfaWQiOiJFNkEyOjVGNUE6NTA2NUNDOjc2NjU1QTo1RUEzMzg1QSIsInRpbWVzdGFtcCI6MTU4Nzc1NTEwNSwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">

    <meta name="enabled-features" content="MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,GHE_CLOUD_TRIAL,PAGE_STALE_CHECK">

  <meta http-equiv="x-pjax-version" content="2bbfba52e521bb8ff0952ceb7baa307e">
  

      <link href="https://github.com/denisemauldin/d3-timeline/commits/master.atom" rel="alternate" title="Recent Commits to d3-timeline:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/denisemauldin/d3-timeline git https://github.com/denisemauldin/d3-timeline.git">

  <meta name="octolytics-dimension-user_id" content="196261" /><meta name="octolytics-dimension-user_login" content="denisemauldin" /><meta name="octolytics-dimension-repository_id" content="94921267" /><meta name="octolytics-dimension-repository_nwo" content="denisemauldin/d3-timeline" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="94921267" /><meta name="octolytics-dimension-repository_network_root_nwo" content="denisemauldin/d3-timeline" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive page-blob">
    

    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
      <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
        <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
      </span>

      
      



          <header class="Header py-lg-0 js-details-container Details flex-wrap flex-lg-nowrap p-responsive" role="banner">
  <div class="Header-item d-none d-lg-flex">
    <a class="Header-link" href="https://github.com/" data-hotkey="g d"
  aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

  </div>

  <div class="Header-item d-lg-none">
    <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
      <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
    </button>
  </div>

  <div class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
      <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="94921267" data-scoped-search-url="/denisemauldin/d3-timeline/search" data-unscoped-search-url="/search" action="/denisemauldin/d3-timeline/search" accept-charset="UTF-8" method="get">
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" value="1Hp2qg5RCXv8MaQ+sFRDp8NjuDCBL3pQXKHmeev4w0kFeS2YITPGYRcz0GY3rx0hHSBQ5U8uygm1ft5kt8BTMQ==" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


    <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
    <a class="Header-link py-lg-3 d-block d-lg-none py-2 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>
  <a class="js-selected-navigation-item Header-link py-lg-3  mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link py-lg-3  mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>

    <div class="mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link py-lg-3 d-inline-block" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link py-lg-3  mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-3 border-top border-lg-top-0 border-white-fade-15" href="https://github.com/sethsch">
      <img class="avatar avatar-user" height="20" width="20" alt="@sethsch" src="https://avatars0.githubusercontent.com/u/31630735?s=60&amp;v=4" />
      sethsch
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="NbOP1iye+4fekPH9n9RnxTfkxYGkljxnnHQvb3epcU3NkGL5irOovT2WYMma/08VpajOBoPjNliSOKsBCmusAw==" />
      <button type="submit" class="Header-link mr-0 mr-lg-3 py-2 py-lg-3 border-top border-lg-top-0 border-white-fade-15 d-lg-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 17" version="1.1" width="16" height="17" aria-hidden="true"><path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"></path></svg>
        Sign out
      </button>
</form></nav>

  </div>

  <div class="Header-item Header-item--full flex-justify-center d-lg-none position-relative">
    <div class="css-truncate css-truncate-target width-fit position-absolute left-0 right-0 text-center">
                <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
    <a class="Header-link" href="/denisemauldin">denisemauldin</a>
    /
    <a class="Header-link" href="/denisemauldin/d3-timeline">d3-timeline</a>

</div>
  </div>

  <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
    

    <a aria-label="You have no unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-sw js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:31630735" href="/notifications">
        <span class="js-indicator-modifier mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
  </div>


  <div class="Header-item position-relative d-none d-lg-flex">
    <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-n2">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="denisemauldin/d3-timeline">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/denisemauldin/d3-timeline/issues/new/choose" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

  </div>

  <div class="Header-item position-relative mr-0 d-none d-lg-flex">
    
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/sethsch/feature_preview/indicator_check">

  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img
  alt="@sethsch"
  width="20"
  height="20"
  src="https://avatars0.githubusercontent.com/u/31630735?s=60&amp;v=4"
  class="avatar avatar-user " />

      <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-n2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/sethsch" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">sethsch</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:196261,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:31630735,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;}}" data-hydro-click-hmac="8651b327eb65bf4325b34ed360710045a9e1cb1bff4046c97379ffbdd85b63ce">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"></path></svg>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
              <span class="text-gray ml-2">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="0WPTsfn8ZY9Xn+I1PaYJklSV3s7CZBtngqmWZkSHpLnzAiR5HshlBn90UpDsvv6tOV052eQX2ZQIeZrSo0S+Sg==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"></path></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
          <div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2020-04-24T15:35:05-04:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2020-04-24T16:05:05-04:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2020-04-24T19:05:05-04:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2020-04-24T23:59:59-04:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2020-04-26T23:59:59-04:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>

    <a role="menuitem" class="dropdown-item" href="/sethsch" data-ga-click="Header, go to profile, text:your profile">Your profile</a>

    <a role="menuitem" class="dropdown-item" href="/sethsch?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/sethsch?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/sethsch?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/sethsch/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}"
    data-feature-preview-close-hmac="b34a24901db43e2ea2e21e090166fe89ea651dd1e7c56403c8bba56f2bb4b6b6"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}"
    data-hydro-click-hmac="3febb5eeb7ef658fce68d500d0475174420c91d7c2a847d0f226cf5eca2134a3"
  >
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="71gibCZCMEylwGdd1r7FhCiLeqqWAwFlThORmZJB6qYXe89DgG9jdkbG9mnTle1UusdxLbF2C1pAXxX374M36A==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
      <input type="text" name="required_field_6e90" hidden="hidden" class="form-control" /><input type="hidden" name="timestamp" value="1587755105374" class="form-control" /><input type="hidden" name="timestamp_secret" value="8902f89fbd1a82e67be5e647498ad40d3ee88af4b93f30355ec00b7ae2a3ca08" class="form-control" />
</form>  </details-menu>
</details>

  </div>

</header>

        

    </div>

  <div id="start-of-content" class="show-on-focus"></div>




    <div id="js-flash-container">


  <template class="js-flash-template">
    <div class="flash flash-full  js-flash-template-container">
  <div class="container-lg px-2" >
    <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
    </button>
    
      <div class="js-flash-template-message"></div>

  </div>
</div>
  </template>
</div>


      

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>




  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      

  











  <div class="pagehead repohead hx_repohead readability-menu bg-gray-light pb-0 pt-0 pt-lg-3">

    <div class="d-flex container-lg mb-4 p-responsive d-none d-lg-flex">

      <div class="flex-auto min-width-0 width-fit mr-3">
        <h1 class="public  d-flex flex-wrap flex-items-center break-word float-none ">
  <span class="flex-self-stretch" style="margin-top: -2px;">
      <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  </span>
  <span class="author ml-2 flex-self-stretch" itemprop="author">
    <a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/users/denisemauldin/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/denisemauldin">denisemauldin</a>
  </span>
  <span class="path-divider flex-self-stretch">/</span>
  <strong itemprop="name" class="mr-2 flex-self-stretch">
    <a data-pjax="#js-repo-pjax-container" href="/denisemauldin/d3-timeline">d3-timeline</a>
  </strong>
  
</h1>


      </div>

      <ul class="pagehead-actions flex-shrink-0 " >



    <li >
      
    <details class="dropdown details-reset details-overlay d-inline-block float-left"
      data-deferred-details-content-url="/denisemauldin/d3-timeline/used_by_contents"
    >
      <summary class="btn btn-sm btn-with-count" data-menu-button>
        <svg class="octicon octicon-package v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 00-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z"></path></svg>
        Used by
        <div class="dropdown-caret"></div>
      </summary>
      <include-fragment accept="text/fragment+html">
        <div class="dropdown-menu dropdown-menu-s p-3 text-center" style="width:360px;">
          <img width="32" height="32" alt="Loading..." class="my-0" src="https://github.githubassets.com/images/spinners/octocat-spinner-64.gif" />
          <p class="pt-1 m-0 f5 text-gray-light">
            Loading dependents...
          </p>
        </div>
      </include-fragment>
    </details>
    <a class="social-count"
      href="/denisemauldin/d3-timeline/network/dependents?package_id=UGFja2FnZS0xODMzMDE3Mg%3D%3D"
      aria-label="49 repositories depend on this package"
    >
      49
    </a>

    </li>

  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="B+UXVuMfXpQljNj4CiNJPhTgiVeHfVSO6vuqdngloe8+7/uic77R0JkznyqikJOP0ezPucWa65DoBmeruKzaEg==" />      <input type="hidden" name="repository_id" value="94921267">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:94921267,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="960de6c73ac8ef9cb651eafebcdb1a51d0aaa88f92e7edd8b3819febe2948f6e" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/denisemauldin/d3-timeline/watchers"
          aria-label="5 users are watching this repository">
          5
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <form class="starred js-social-form" action="/denisemauldin/d3-timeline/unstar" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="nAsRcnNo4LaHyyCqwwLRE3XsHXwRgUZQTDxrn7g0J0W4FhufZAvnIl8xn9WgpgQjc4T8dRxvq6MToRrw2lRq3w==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar denisemauldin/d3-timeline" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:94921267,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="77ce5330a84f025cc089f7fe4a45639269f5cb609ea50016a3a18f64ab2b2a6e" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg height="16" class="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>

        Unstar
</button>        <a class="social-count js-social-count" href="/denisemauldin/d3-timeline/stargazers"
           aria-label="84 users starred this repository">
           84
        </a>
</form>
    <form class="unstarred js-social-form" action="/denisemauldin/d3-timeline/star" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="hNb3qzmbvve9VgFD1Dqy8YYpabdgrYdCo6r61RU9l5sq0bQj/LY0uJruOVGo/AtktnuEagjymVZzV7u49tpflg==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star denisemauldin/d3-timeline" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:94921267,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="72d8c38aa2395aced44c377c20a90bca08b66528aac72f73fa5fc2c13ddfeaf9" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg height="16" class="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>

        Star
</button>        <a class="social-count js-social-count" href="/denisemauldin/d3-timeline/stargazers"
           aria-label="84 users starred this repository">
          84
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/denisemauldin/d3-timeline/fork" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="EKBNbI/mbPvAjOD3J8dFv1Ao7fQP4Pw+Qg9h4dlAsnjFkcLI0lfZoJvzPLLsNxIMGs37mZT+Kv88Fc29G1xflg==" />
            <button class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:94921267,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="2ccd9162bf0d3740f407bc4b935f1689bf41323fea76b2d5bf5c3906b5fecc61" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" type="submit" title="Fork your own copy of denisemauldin/d3-timeline to your account" aria-label="Fork your own copy of denisemauldin/d3-timeline to your account">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              Fork
</button></form>
    <a href="/denisemauldin/d3-timeline/network/members" class="social-count"
       aria-label="45 users forked this repository">
      45
    </a>
  </li>
</ul>

    </div>
      
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax clearfix container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /denisemauldin/d3-timeline" href="/denisemauldin/d3-timeline">
      <div class="d-inline"><svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg></div>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /denisemauldin/d3-timeline/issues" href="/denisemauldin/d3-timeline/issues">
        <div class="d-inline"><svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg></div>
        <span itemprop="name">Issues</span>
        <span class="Counter">11</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" data-skip-pjax="true" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /denisemauldin/d3-timeline/pulls" href="/denisemauldin/d3-timeline/pulls">
      <div class="d-inline"><svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg></div>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">2</span>
      <meta itemprop="position" content="4">
</a>  </span>


    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement" class="position-relative float-left">
      <a data-hotkey="g w" data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /denisemauldin/d3-timeline/actions" href="/denisemauldin/d3-timeline/actions">
        <div class="d-inline"><svg class="octicon octicon-play" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8A7 7 0 110 8a7 7 0 0114 0zm-8.223 3.482l4.599-3.066a.5.5 0 000-.832L5.777 4.518A.5.5 0 005 4.934v6.132a.5.5 0 00.777.416z"></path></svg></div>
        Actions
</a>
    </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /denisemauldin/d3-timeline/projects" href="/denisemauldin/d3-timeline/projects">
      <div class="d-inline"><svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg></div>
      Projects
      <span class="Counter">0</span>
</a>
    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /denisemauldin/d3-timeline/wiki" href="/denisemauldin/d3-timeline/wiki">
      <div class="d-inline"><svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg></div>
      Wiki
</a>
    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security overview alerts policy token_scanning code_scanning /denisemauldin/d3-timeline/security" href="/denisemauldin/d3-timeline/security">
      <div class="d-inline"><svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"></path></svg></div>
      Security
          <span class="Counter js-security-tab-count" data-url="/denisemauldin/d3-timeline/security/overall-count" hidden></span>
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people /denisemauldin/d3-timeline/pulse" href="/denisemauldin/d3-timeline/pulse">
      <div class="d-inline"><svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg></div>
      Insights
</a>

</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /denisemauldin/d3-timeline" href="/denisemauldin/d3-timeline">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /denisemauldin/d3-timeline/issues" href="/denisemauldin/d3-timeline/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">11</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /denisemauldin/d3-timeline/pulls" href="/denisemauldin/d3-timeline/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">2</span>
        <meta itemprop="position" content="4">
</a>    </span>


      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /denisemauldin/d3-timeline/projects" href="/denisemauldin/d3-timeline/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /denisemauldin/d3-timeline/actions" href="/denisemauldin/d3-timeline/actions">
          <span itemprop="name">Actions</span>
          <meta itemprop="position" content="6">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_wiki /denisemauldin/d3-timeline/wiki" href="/denisemauldin/d3-timeline/wiki">
          <span itemprop="name">Wiki</span>
          <meta itemprop="position" content="7">
</a>      </span>

      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security overview alerts policy token_scanning code_scanning /denisemauldin/d3-timeline/security" href="/denisemauldin/d3-timeline/security">
        <span itemprop="name">Security</span>
            <span class="Counter js-security-deferred-tab-count" hidden></span>
        <meta itemprop="position" content="8">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /denisemauldin/d3-timeline/pulse" href="/denisemauldin/d3-timeline/pulse">
        Pulse
</a>
      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="community /denisemauldin/d3-timeline/community" href="/denisemauldin/d3-timeline/community">
          Community
</a>      </span>

  </nav>
</div>


  </div>

  

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>


<div class="container-lg clearfix new-discussion-timeline  p-responsive">
  <div class="repository-content ">

    
    

  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/denisemauldin/d3-timeline/blob/8f257b2aa344cd8c9dc6e986d379ed97b388a1cd/dist/d3-timelines.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v22:821566295747466f8d35803088e00036 -->
    

    <div class="d-flex flex-items-start flex-shrink-0 flex-column flex-md-row pb-3">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay branch-select-menu " id="branch-select-menu">
  <summary class="btn css-truncate btn-sm"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
    <span class="dropdown-caret"></span>
  </summary>

  <details-menu class="SelectMenu SelectMenu--hasFilter" src="/denisemauldin/d3-timeline/refs/master/dist/d3-timelines.js?source_action=show&amp;source_controller=blob" preload>
    <div class="SelectMenu-modal">
      <include-fragment class="SelectMenu-loading" aria-label="Menu is loading">
        <svg class="octicon octicon-octoface anim-pulse" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"></path></svg>
      </include-fragment>
    </div>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/denisemauldin/d3-timeline/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="dist/d3-timelines.js" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/denisemauldin/d3-timeline"><span>d3-timeline</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/denisemauldin/d3-timeline/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">d3-timelines.js</strong>
          <span class="separator">/</span><details class="details-reset details-overlay d-inline" id="jumpto-symbol-select-menu">
  <summary class="btn-link link-gray css-truncate" aria-haspopup="true" data-hotkey="r" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_blob_definitions&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_blob_definitions&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="eb8a24e04b7e35c00255450eb0549ca3f0656d492800cd1b72ca142c61e35a0c">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
    <span data-menu-button>Jump to</span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="SelectMenu SelectMenu--hasFilter" role="menu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <span class="SelectMenu-title">Code definitions</span>
        <button class="SelectMenu-closeButton" type="button" data-toggle-for="jumpto-symbol-select-menu">
          <svg aria-label="Close menu" class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
        </button>
      </header>
        <div class="SelectMenu-filter">
          <input
            class="SelectMenu-input form-control js-filterable-field"
            id="jumpto-symbols-filter-field"
            type="text"
            autocomplete="off"
            spellcheck="false"
            autofocus
            placeholder="Filter definitions"
            aria-label="Filter definitions">
        </div>
      <div class="SelectMenu-list">
        <div data-filterable-for="jumpto-symbols-filter-field" data-filterable-type="substring">
          <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L7">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>timelines</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L10">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>hover</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L11">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>mouseover</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L12">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>mouseout</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L13">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>click</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L14">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>scroll</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L15">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>labelFunction</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L17">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>navigateLeft</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L18">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>navigateRight</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L65">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>appendTimeAxis</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L79">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>appendTimeAxisCalendarYear</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L95">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>appendTimeAxisNav</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L131">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>appendAxisHeaderBackground</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L141">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>appendTimeAxisTick</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L149">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>appendBackgroundBar</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L163">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>appendLabel</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L188">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>timelines</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L256">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>formatDays</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L455">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>getStackPosition</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L461">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>getStackTextPosition</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L478">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>move</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L548">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>getXPos</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L552">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>getTextWidth</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L561">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>getXTextPos</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L582">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>setHeight</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L603">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>setWidth</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L623">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>appendLine</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L639">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>margin</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L645">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>orient</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L651">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>itemHeight</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L657">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>itemMargin</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L663">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>navMargin</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L669">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>height</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L675">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>width</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L681">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>display</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L687">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>labelFormat</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L693">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>tickFormat</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L699">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>allowZoom</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L705">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>maxZoom</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L711">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>hover</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L717">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>mouseover</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L723">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>mouseout</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L729">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>click</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L735">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>scroll</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L741">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>colors</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L747">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>beginning</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L753">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>ending</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L759">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>labelMargin</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L765">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>labelFloat</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L771">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>rotateTicks</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L777">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>stack</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L782">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>relativeTime</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L787">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>linearTime</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L792">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>showBorderLine</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L797">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>showBorderFormat</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L804">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>showBorderLineClass</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L810">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>showToday</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L815">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>showTodayFormat</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L821">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>colorProperty</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L827">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>rowSeparators</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L834">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>background</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L840">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>showTimeAxis</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L845">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>showAxisTop</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L850">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>showAxisCalendarYear</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L855">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>showTimeAxisTick</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L860">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>fullLengthBackgrounds</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L865">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>showTimeAxisTickFormat</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L871">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>showAxisHeaderBackground</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L878">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>xAxisClass</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L884">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>navigate</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a><a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}" data-hydro-click-hmac="0745af4513fef44dc376c664eb5bc0f188744b02a7c707d64ffecce0c1d28483" href="/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js#L892">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
  <span class="flex-auto css-truncate-target" data-menu-button-text>version</span>
  <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>
        </div>
      </div>
      <footer class="SelectMenu-footer">
        <div class="d-flex flex-justify-between">
          Code navigation index up-to-date
          <svg class="octicon octicon-primitive-dot text-green" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path></svg>
        </div>
      </footer>
    </div>
  </details-menu>
</details>

      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/denisemauldin/d3-timeline/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="dist/d3-timelines.js" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    <include-fragment src="/denisemauldin/d3-timeline/contributors/master/dist/d3-timelines.js" class="Box Box--condensed commit-loader">
      <div class="Box-body bg-blue-light f6">
        Fetching contributors&hellip;
      </div>

      <div class="Box-body d-flex flex-items-center" >
        <img alt="" class="loader-loading mr-2" src="https://github.githubassets.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
        <span class="text-red h6 loader-error">Cannot retrieve contributors at this time</span>
      </div>
</include-fragment>





    <div class="Box mt-3 position-relative
      ">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      903 lines (783 sloc)
      <span class="file-info-divider"></span>
    27.4 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/denisemauldin/d3-timeline/raw/master/dist/d3-timelines.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/denisemauldin/d3-timeline/blame/master/dist/d3-timelines.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/denisemauldin/d3-timeline/commits/master/dist/d3-timelines.js">History</a>
    </div>


    <div>
          <a class="btn-octicon tooltipped tooltipped-nw js-remove-unless-platform"
             data-platforms="windows,mac"
             href="x-github-client://openRepo/https://github.com/denisemauldin/d3-timeline?branch=master&amp;filepath=dist%2Fd3-timelines.js"
             aria-label="Open this file in GitHub Desktop"
             data-ga-click="Repository, open with desktop">
              <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/denisemauldin/d3-timeline/edit/master/dist/d3-timelines.js" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="zZDsXI4jJbmv9+0G0j22klEzgNA5RMVWiJKwQi2KpQbXIwPD+vhqr9kbmWvBRfdjIo6dzrEDTjkJjIHNYU6dfg==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
            </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/denisemauldin/d3-timeline/delete/master/dist/d3-timelines.js" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="sJfG7HhqxkKZHtHbtJxeQ6XVKhfUaPaofNq5GC+/sI4gLNLhPt/YTNs1Gc28axYwt4KTH0BVfSpsd0MZ0WMeSQ==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and delete the file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
            </button>
</form>    </div>
  </div>
</div>



      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip>
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>global</span><span class=pl-kos>,</span> <span class=pl-s1>factory</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>typeof</span> <span class=pl-s1>exports</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;object&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-k>typeof</span> <span class=pl-smi>module</span> !== <span class=pl-s>&#39;undefined&#39;</span> ? <span class=pl-s1>factory</span><span class=pl-kos>(</span><span class=pl-s1>exports</span><span class=pl-kos>,</span> <span class=pl-en>require</span><span class=pl-kos>(</span><span class=pl-s>&#39;d3-axis&#39;</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-en>require</span><span class=pl-kos>(</span><span class=pl-s>&#39;d3-array&#39;</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-en>require</span><span class=pl-kos>(</span><span class=pl-s>&#39;d3-time-format&#39;</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-en>require</span><span class=pl-kos>(</span><span class=pl-s>&#39;d3-time&#39;</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-en>require</span><span class=pl-kos>(</span><span class=pl-s>&#39;d3-scale&#39;</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-en>require</span><span class=pl-kos>(</span><span class=pl-s>&#39;d3-selection&#39;</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-en>require</span><span class=pl-kos>(</span><span class=pl-s>&#39;d3-zoom&#39;</span><span class=pl-kos>)</span><span class=pl-kos>)</span> :</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>typeof</span> <span class=pl-s1>define</span> <span class=pl-c1>===</span> <span class=pl-s>&#39;function&#39;</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>define</span><span class=pl-kos>.</span><span class=pl-c1>amd</span> ? <span class=pl-en>define</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-s>&#39;exports&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;d3-axis&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;d3-array&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;d3-time-format&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;d3-time&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;d3-scale&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;d3-selection&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;d3-zoom&#39;</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-s1>factory</span><span class=pl-kos>)</span> :</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>(</span><span class=pl-s1>factory</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>global</span><span class=pl-kos>.</span><span class=pl-c1>d3</span> <span class=pl-c1>=</span> <span class=pl-s1>global</span><span class=pl-kos>.</span><span class=pl-c1>d3</span> <span class=pl-c1>||</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-s1>global</span><span class=pl-kos>.</span><span class=pl-c1>d3</span><span class=pl-kos>,</span><span class=pl-s1>global</span><span class=pl-kos>.</span><span class=pl-c1>d3</span><span class=pl-kos>,</span><span class=pl-s1>global</span><span class=pl-kos>.</span><span class=pl-c1>d3</span><span class=pl-kos>,</span><span class=pl-s1>global</span><span class=pl-kos>.</span><span class=pl-c1>d3</span><span class=pl-kos>,</span><span class=pl-s1>global</span><span class=pl-kos>.</span><span class=pl-c1>d3</span><span class=pl-kos>,</span><span class=pl-s1>global</span><span class=pl-kos>.</span><span class=pl-c1>d3</span><span class=pl-kos>,</span><span class=pl-s1>global</span><span class=pl-kos>.</span><span class=pl-c1>d3</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>exports</span><span class=pl-kos>,</span><span class=pl-s1>d3Axis</span><span class=pl-kos>,</span><span class=pl-s1>d3Array</span><span class=pl-kos>,</span><span class=pl-s1>d3TimeFormat</span><span class=pl-kos>,</span><span class=pl-s1>d3Time</span><span class=pl-kos>,</span><span class=pl-s1>d3Scale</span><span class=pl-kos>,</span><span class=pl-s1>d3Selection</span><span class=pl-kos>,</span><span class=pl-s1>d3Zoom</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-s>&#39;use strict&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-en>timelines</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-c1>DISPLAY_TYPES</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-s>&quot;circle&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;rect&quot;</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-en>hover</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>mouseover</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>mouseout</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>click</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>scroll</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>labelFunction</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>label</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-k>return</span> <span class=pl-s1>label</span><span class=pl-kos>;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>labelFloat</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>,</span>  <span class=pl-c>// floats up this many pixels</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>navigateLeft</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>navigateRight</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>orient</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;bottom&quot;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>width</span> <span class=pl-c1>=</span> null<span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>height</span> <span class=pl-c1>=</span> null<span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>rowSeparatorsColor</span> <span class=pl-c1>=</span> null<span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>backgroundColor</span> <span class=pl-c1>=</span> null<span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>tickFormat</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">						<span class=pl-c1>format</span>: <span class=pl-s1>d3TimeFormat</span><span class=pl-kos>.</span><span class=pl-en>timeFormat</span><span class=pl-kos>(</span><span class=pl-s>&quot;%I %p&quot;</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">						<span class=pl-c1>tickTime</span>: <span class=pl-s1>d3Time</span><span class=pl-kos>.</span><span class=pl-c1>timeHour</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">						<span class=pl-c1>tickInterval</span>: <span class=pl-c1>1</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">						<span class=pl-c1>tickSize</span>: <span class=pl-c1>6</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">						<span class=pl-c1>tickValues</span>: null</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>allowZoom</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>axisBgColor</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;white&quot;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>chartData</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>colorCycle</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Scale</span><span class=pl-kos>.</span><span class=pl-en>scaleOrdinal</span><span class=pl-kos>(</span><span class=pl-s1>d3Scale</span><span class=pl-kos>.</span><span class=pl-c1>schemeCategory20</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>colorPropertyName</span> <span class=pl-c1>=</span> null<span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>display</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;rect&quot;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>beginning</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>labelMargin</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>ending</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>margin</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-c1>left</span>: <span class=pl-c1>30</span><span class=pl-kos>,</span> <span class=pl-c1>right</span>:<span class=pl-c1>30</span><span class=pl-kos>,</span> <span class=pl-c1>top</span>: <span class=pl-c1>30</span><span class=pl-kos>,</span> <span class=pl-c1>bottom</span>:<span class=pl-c1>30</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>maxZoom</span> <span class=pl-c1>=</span> <span class=pl-c1>5</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>stacked</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>rotateTicks</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>timeIsRelative</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>timeIsLinear</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>fullLengthBackgrounds</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>itemHeight</span> <span class=pl-c1>=</span> <span class=pl-c1>20</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>itemMargin</span> <span class=pl-c1>=</span> <span class=pl-c1>5</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>navMargin</span> <span class=pl-c1>=</span> <span class=pl-c1>60</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>showTimeAxis</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>showAxisTop</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>showTodayLine</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>timeAxisTick</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>timeAxisTickFormat</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-c1>stroke</span>: <span class=pl-s>&quot;stroke-dasharray&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>spacing</span>: <span class=pl-s>&quot;4 10&quot;</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>showTodayFormat</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-c1>marginTop</span>: <span class=pl-c1>25</span><span class=pl-kos>,</span> <span class=pl-c1>marginBottom</span>: <span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>width</span>: <span class=pl-c1>1</span><span class=pl-kos>,</span> <span class=pl-c1>color</span>: <span class=pl-s1>colorCycle</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>showBorderLine</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>showBorderFormat</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-c1>marginTop</span>: <span class=pl-c1>25</span><span class=pl-kos>,</span> <span class=pl-c1>marginBottom</span>: <span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>width</span>: <span class=pl-c1>1</span><span class=pl-kos>,</span> <span class=pl-c1>color</span>: <span class=pl-s1>colorCycle</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>showBorderLineClass</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;timeline-border-line&quot;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>showAxisHeaderBackground</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>showAxisNav</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>showAxisCalendarYear</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>xAxisClass</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;timeline-xAxis&#39;</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-en>appendTimeAxis</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>,</span> <span class=pl-s1>xAxis</span><span class=pl-kos>,</span> <span class=pl-s1>yPosition</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>showAxisHeaderBackground</span><span class=pl-kos>)</span><span class=pl-kos>{</span> <span class=pl-en>appendAxisHeaderBackground</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>showAxisNav</span><span class=pl-kos>)</span><span class=pl-kos>{</span> <span class=pl-en>appendTimeAxisNav</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>axis</span> <span class=pl-c1>=</span> <span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&quot;g&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>xAxisClass</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;transform&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;translate(&quot;</span> <span class=pl-c1>+</span> <span class=pl-c1>0</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;,&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>yPosition</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;)&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-s1>xAxis</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-s1>axis</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-en>appendTimeAxisCalendarYear</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>nav</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>calendarLabel</span> <span class=pl-c1>=</span> <span class=pl-s1>beginning</span><span class=pl-kos>.</span><span class=pl-en>getFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>beginning</span><span class=pl-kos>.</span><span class=pl-en>getFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> != <span class=pl-s1>ending</span><span class=pl-kos>.</span><span class=pl-en>getFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>calendarLabel</span> <span class=pl-c1>=</span> <span class=pl-s1>beginning</span><span class=pl-kos>.</span><span class=pl-en>getFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;-&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>ending</span><span class=pl-kos>.</span><span class=pl-en>getFullYear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>nav</span><span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&quot;text&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;transform&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;translate(&quot;</span> <span class=pl-c1>+</span> <span class=pl-c1>20</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;, 0)&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;x&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;y&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>14</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;calendarYear&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>text</span><span class=pl-kos>(</span><span class=pl-s1>calendarLabel</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-en>appendTimeAxisNav</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>timelineBlocks</span> <span class=pl-c1>=</span> <span class=pl-c1>6</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>leftNavMargin</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>-</span> <span class=pl-s1>navMargin</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>incrementValue</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>)</span>/<span class=pl-s1>timelineBlocks</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>rightNavMargin</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>-</span> <span class=pl-s1>incrementValue</span> <span class=pl-c1>+</span> <span class=pl-s1>navMargin</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>nav</span> <span class=pl-c1>=</span> <span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&#39;g&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;axis&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;transform&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;translate(0, 20)&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>showAxisCalendarYear</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-en>appendTimeAxisCalendarYear</span><span class=pl-kos>(</span><span class=pl-s1>nav</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>nav</span><span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&quot;text&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;transform&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;translate(&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>leftNavMargin</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;, 0)&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;x&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;y&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>14</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;chevron&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>text</span><span class=pl-kos>(</span><span class=pl-s>&quot;&lt;&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;click&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>return</span> <span class=pl-en>navigateLeft</span><span class=pl-kos>(</span><span class=pl-s1>beginning</span><span class=pl-kos>,</span> <span class=pl-s1>chartData</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>nav</span><span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&quot;text&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;transform&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;translate(&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>rightNavMargin</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;, 0)&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;x&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;y&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>14</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;chevron&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>text</span><span class=pl-kos>(</span><span class=pl-s>&quot;&gt;&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;click&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>return</span> <span class=pl-en>navigateRight</span><span class=pl-kos>(</span><span class=pl-s1>ending</span><span class=pl-kos>,</span> <span class=pl-s1>chartData</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-en>appendAxisHeaderBackground</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>,</span> <span class=pl-s1>xAxis</span><span class=pl-kos>,</span> <span class=pl-s1>yAxis</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>insert</span><span class=pl-kos>(</span><span class=pl-s>&quot;rect&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;row-green-bar&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;x&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>xAxis</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;width&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>width</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;y&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>yAxis</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;height&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>itemHeight</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;fill&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>axisBgColor</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-en>appendTimeAxisTick</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>,</span> <span class=pl-s1>xAxis</span><span class=pl-kos>,</span> <span class=pl-s1>maxStack</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&quot;g&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;axis&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;transform&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;translate(&quot;</span> <span class=pl-c1>+</span> <span class=pl-c1>0</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;,&quot;</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>itemHeight</span> <span class=pl-c1>+</span> <span class=pl-s1>itemMargin</span><span class=pl-kos>)</span> * <span class=pl-s1>maxStack</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;)&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s1>timeAxisTickFormat</span><span class=pl-kos>.</span><span class=pl-c1>stroke</span><span class=pl-kos>,</span> <span class=pl-s1>timeAxisTickFormat</span><span class=pl-kos>.</span><span class=pl-c1>spacing</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-s1>xAxis</span><span class=pl-kos>.</span><span class=pl-en>tickFormat</span><span class=pl-kos>(</span><span class=pl-s>&quot;&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>tickSize</span><span class=pl-kos>(</span><span class=pl-c1>-</span><span class=pl-kos>(</span><span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>itemHeight</span> <span class=pl-c1>+</span> <span class=pl-s1>itemMargin</span><span class=pl-kos>)</span> * <span class=pl-kos>(</span><span class=pl-s1>maxStack</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-c1>3</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-en>appendBackgroundBar</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>yAxisMapping</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>,</span> <span class=pl-s1>g</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>,</span> <span class=pl-s1>datum</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>greenbarYAxis</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>itemHeight</span> <span class=pl-c1>+</span> <span class=pl-s1>itemMargin</span><span class=pl-kos>)</span> * <span class=pl-s1>yAxisMapping</span><span class=pl-kos>[</span><span class=pl-s1>index</span><span class=pl-kos>]</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>top</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">				g.selectAll(&quot;svg&quot;)</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">					.data(data).<span class=pl-en>enter</span><span class=pl-kos>(</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>insert</span><span class=pl-kos>(</span><span class=pl-s>&quot;rect&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;:first-child&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;row-green-bar&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;x&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>fullLengthBackgrounds</span> ? <span class=pl-c1>0</span> : <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;width&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>fullLengthBackgrounds</span> ? <span class=pl-s1>width</span> : <span class=pl-kos>(</span><span class=pl-s1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>-</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;y&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>greenbarYAxis</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;height&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>itemHeight</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;fill&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>backgroundColor</span> <span class=pl-k>instanceof</span> <span class=pl-v>Function</span> ? <span class=pl-s1>backgroundColor</span><span class=pl-kos>(</span><span class=pl-s1>datum</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>)</span> : <span class=pl-s1>backgroundColor</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-en>appendLabel</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>gParent</span><span class=pl-kos>,</span> <span class=pl-s1>yAxisMapping</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>,</span> <span class=pl-s1>hasLabel</span><span class=pl-kos>,</span> <span class=pl-s1>datum</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>fullItemHeight</span>    <span class=pl-c1>=</span> <span class=pl-s1>itemHeight</span> <span class=pl-c1>+</span> <span class=pl-s1>itemMargin</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>rowsDown</span>          <span class=pl-c1>=</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>fullItemHeight</span>/<span class=pl-c1>2</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s1>fullItemHeight</span> * <span class=pl-kos>(</span><span class=pl-s1>yAxisMapping</span><span class=pl-kos>[</span><span class=pl-s1>index</span><span class=pl-kos>]</span> <span class=pl-c1>||</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>gParent</span><span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&quot;text&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;timeline-label&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;transform&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;translate(&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>labelMargin</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;,&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>rowsDown</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;)&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>text</span><span class=pl-kos>(</span><span class=pl-s1>hasLabel</span> ? <span class=pl-en>labelFunction</span><span class=pl-kos>(</span><span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>label</span><span class=pl-kos>)</span> : <span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>id</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;click&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">						<span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span><span class=pl-s>&quot;label click!&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>point</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-en>mouse</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>gParent</span><span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&quot;rect&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;id&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;clickpoint&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;x&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>point</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;width&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>10</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;height&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>itemHeight</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">						<span class=pl-en>click</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>,</span> <span class=pl-s1>datum</span><span class=pl-kos>,</span> <span class=pl-s1>point</span><span class=pl-kos>,</span> <span class=pl-s1>xScale</span><span class=pl-kos>.</span><span class=pl-en>invert</span><span class=pl-kos>(</span><span class=pl-s1>point</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>/*###########################</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			####    START timelines    ###</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			#############################*/</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>function</span> <span class=pl-en>timelines</span> <span class=pl-kos>(</span><span class=pl-s1>gParent</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>gParentSize</span> <span class=pl-c1>=</span> <span class=pl-s1>gParent</span><span class=pl-kos>.</span><span class=pl-en>node</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>getBoundingClientRect</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-c>// the svg size</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>gParentItem</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-en>select</span><span class=pl-kos>(</span><span class=pl-s1>gParent</span><span class=pl-kos>.</span><span class=pl-en>node</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-c>// the svg</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>g</span> <span class=pl-c1>=</span> <span class=pl-s1>gParent</span><span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&quot;g&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;container&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>yAxisMapping</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>maxStack</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>minTime</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>maxTime</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>setWidth</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// check if the user wants relative time</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// if so, substract the first timestamp from each subsequent timestamps</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>timeIsRelative</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>each</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>originTime</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>datum</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>times</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>time</span><span class=pl-kos>,</span> <span class=pl-s1>j</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>index</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>j</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">									<span class=pl-s1>originTime</span> <span class=pl-c1>=</span> <span class=pl-s1>time</span><span class=pl-kos>.</span><span class=pl-c1>starting_time</span><span class=pl-kos>;</span>               <span class=pl-c>//Store the timestamp that will serve as origin</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">									<span class=pl-s1>time</span><span class=pl-kos>.</span><span class=pl-c1>starting_time</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span>                        <span class=pl-c>//Set tahe origin</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">									<span class=pl-s1>time</span><span class=pl-kos>.</span><span class=pl-c1>ending_time</span> <span class=pl-c1>=</span> <span class=pl-s1>time</span><span class=pl-kos>.</span><span class=pl-c1>ending_time</span> <span class=pl-c1>-</span> <span class=pl-s1>originTime</span><span class=pl-kos>;</span>     <span class=pl-c>//Store the relative time (millis)</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>}</span><span class=pl-k>else</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">									<span class=pl-s1>time</span><span class=pl-kos>.</span><span class=pl-c1>starting_time</span> <span class=pl-c1>=</span> <span class=pl-s1>time</span><span class=pl-kos>.</span><span class=pl-c1>starting_time</span> <span class=pl-c1>-</span> <span class=pl-s1>originTime</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">									<span class=pl-s1>time</span><span class=pl-kos>.</span><span class=pl-c1>ending_time</span> <span class=pl-c1>=</span> <span class=pl-s1>time</span><span class=pl-kos>.</span><span class=pl-c1>ending_time</span> <span class=pl-c1>-</span> <span class=pl-s1>originTime</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// check how many stacks we&#39;re gonna need</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// do this here so that we can draw the axis before the graph</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>stacked</span> <span class=pl-c1>||</span> <span class=pl-s1>ending</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span> <span class=pl-c1>||</span> <span class=pl-s1>beginning</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>each</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>datum</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">							<span class=pl-c>// create y mapping for stacked graph</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">							<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>stacked</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>keys</span><span class=pl-kos>(</span><span class=pl-s1>yAxisMapping</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>index</span><span class=pl-kos>)</span> <span class=pl-c1>==</span> <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">								<span class=pl-s1>yAxisMapping</span><span class=pl-kos>[</span><span class=pl-s1>index</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>maxStack</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">								<span class=pl-s1>maxStack</span><span class=pl-c1>++</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">							<span class=pl-c>// figure out beginning and ending times if they are unspecified</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>times</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>time</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>beginning</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">									<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>time</span><span class=pl-kos>.</span><span class=pl-c1>starting_time</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>minTime</span> <span class=pl-c1>||</span> <span class=pl-kos>(</span><span class=pl-s1>minTime</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>timeIsRelative</span> <span class=pl-c1>===</span> <span class=pl-c1>false</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">										<span class=pl-s1>minTime</span> <span class=pl-c1>=</span> <span class=pl-s1>time</span><span class=pl-kos>.</span><span class=pl-c1>starting_time</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>ending</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">									<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>time</span><span class=pl-kos>.</span><span class=pl-c1>ending_time</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>maxTime</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">										<span class=pl-s1>maxTime</span> <span class=pl-c1>=</span> <span class=pl-s1>time</span><span class=pl-kos>.</span><span class=pl-c1>ending_time</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>ending</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>ending</span> <span class=pl-c1>=</span> <span class=pl-s1>maxTime</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>beginning</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>beginning</span> <span class=pl-c1>=</span> <span class=pl-s1>minTime</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>scaleFactor</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-c1>1</span>/<span class=pl-kos>(</span><span class=pl-s1>ending</span> <span class=pl-c1>-</span> <span class=pl-s1>beginning</span><span class=pl-kos>)</span><span class=pl-kos>)</span> * <span class=pl-kos>(</span><span class=pl-s1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>-</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>right</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>function</span> <span class=pl-en>formatDays</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>days</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span><span class=pl-s1>d</span> / <span class=pl-c1>86400</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">								<span class=pl-s1>hours</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>d</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>days</span> * <span class=pl-c1>86400</span><span class=pl-kos>)</span><span class=pl-kos>)</span> / <span class=pl-c1>3600</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">								<span class=pl-s1>minutes</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>d</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>days</span> * <span class=pl-c1>86400</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>hours</span> * <span class=pl-c1>3600</span><span class=pl-kos>)</span><span class=pl-kos>)</span> / <span class=pl-c1>60</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">								<span class=pl-s1>seconds</span> <span class=pl-c1>=</span> <span class=pl-s1>d</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>days</span> * <span class=pl-c1>86400</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>hours</span> * <span class=pl-c1>3600</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>minutes</span> * <span class=pl-c1>60</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>output</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>seconds</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>output</span> <span class=pl-c1>=</span> <span class=pl-s1>seconds</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;s&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>minutes</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">								<span class=pl-s1>output</span> <span class=pl-c1>=</span> <span class=pl-s1>minutes</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;m &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>output</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>hours</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">								<span class=pl-s1>output</span> <span class=pl-c1>=</span> <span class=pl-s1>hours</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;h &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>output</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>days</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">								<span class=pl-s1>output</span> <span class=pl-c1>=</span> <span class=pl-s1>days</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;d &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>output</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>return</span> <span class=pl-s1>output</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>xScale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>xAxis</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>orient</span> <span class=pl-c1>==</span> <span class=pl-s>&quot;bottom&quot;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>xAxis</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Axis</span><span class=pl-kos>.</span><span class=pl-en>axisBottom</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>orient</span> <span class=pl-c1>==</span> <span class=pl-s>&quot;top&quot;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>xAxis</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Axis</span><span class=pl-kos>.</span><span class=pl-en>axisTop</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>timeIsLinear</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>xScale</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Scale</span><span class=pl-kos>.</span><span class=pl-en>scaleLinear</span><span class=pl-kos>(</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>domain</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-s1>beginning</span><span class=pl-kos>,</span> <span class=pl-s1>ending</span><span class=pl-kos>]</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>range</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>,</span> <span class=pl-s1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>right</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>xAxis</span><span class=pl-kos>.</span><span class=pl-en>scale</span><span class=pl-kos>(</span><span class=pl-s1>xScale</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>tickFormat</span><span class=pl-kos>(</span><span class=pl-s1>formatDays</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>tickValues</span><span class=pl-kos>(</span><span class=pl-s1>d3Array</span><span class=pl-kos>.</span><span class=pl-en>range</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>ending</span><span class=pl-kos>,</span> <span class=pl-c1>86400</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>xScale</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Scale</span><span class=pl-kos>.</span><span class=pl-en>scaleTime</span><span class=pl-kos>(</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>domain</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-s1>beginning</span><span class=pl-kos>,</span> <span class=pl-s1>ending</span><span class=pl-kos>]</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>range</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>,</span> <span class=pl-s1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>right</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>xAxis</span><span class=pl-kos>.</span><span class=pl-en>scale</span><span class=pl-kos>(</span><span class=pl-s1>xScale</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>tickFormat</span><span class=pl-kos>(</span><span class=pl-s1>tickFormat</span><span class=pl-kos>.</span><span class=pl-c1>format</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>tickSize</span><span class=pl-kos>(</span><span class=pl-s1>tickFormat</span><span class=pl-kos>.</span><span class=pl-c1>tickSize</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>tickFormat</span><span class=pl-kos>.</span><span class=pl-c1>tickValues</span> !== null<span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>xAxis</span><span class=pl-kos>.</span><span class=pl-en>tickValues</span><span class=pl-kos>(</span><span class=pl-s1>tickFormat</span><span class=pl-kos>.</span><span class=pl-c1>tickValues</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>xAxis</span><span class=pl-kos>.</span><span class=pl-en>tickArguments</span><span class=pl-kos>(</span><span class=pl-s1>tickFormat</span><span class=pl-kos>.</span><span class=pl-c1>numTicks</span> <span class=pl-c1>||</span> <span class=pl-kos>[</span><span class=pl-s1>tickFormat</span><span class=pl-kos>.</span><span class=pl-c1>tickTime</span><span class=pl-kos>,</span> <span class=pl-s1>tickFormat</span><span class=pl-kos>.</span><span class=pl-c1>tickInterval</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// append a view for zoom/pan support</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>view</span> <span class=pl-c1>=</span> <span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&quot;g&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;view&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// draw the chart</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>each</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>chartData</span> <span class=pl-c1>=</span> <span class=pl-s1>d</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>datum</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>data</span> <span class=pl-c1>=</span> <span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>times</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>name</span> <span class=pl-c1>=</span> <span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>name</span> <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>hasLabel</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span><span class=pl-kos>(</span><span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>label</span><span class=pl-kos>)</span> != <span class=pl-s>&quot;undefined&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// issue warning about using id per data set. Ids should be individual to data elements</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span><span class=pl-kos>(</span><span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>id</span><span class=pl-kos>)</span> != <span class=pl-s>&quot;undefined&quot;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">							<span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>warn</span><span class=pl-kos>(</span><span class=pl-s>&quot;d3Timeline Warning: Ids per dataset is deprecated in favor of a &#39;class&#39; key. Ids are now per data element.&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>backgroundColor</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-en>appendBackgroundBar</span><span class=pl-kos>(</span><span class=pl-s1>yAxisMapping</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>,</span> <span class=pl-s1>g</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>,</span> <span class=pl-s1>datum</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">						view.selectAll(&quot;svg&quot;)</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">							.data(data).enter()</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">							.append(function(d, i) {</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">										return document.createElementNS(d3Selection.namespaces.svg, &quot;display&quot; in d? d.display:display);</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">							})</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">							.attr(&quot;x&quot;, getXPos)</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">							.attr(&quot;y&quot;, getStackPosition)</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">							.attr(&quot;width&quot;, function (d, i) {</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">								return (d.ending_time - d.starting_time) * scaleFactor;</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">							})</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">							.attr(&quot;cy&quot;, function(d, i) {</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">									return getStackPosition(d, i) + itemHeight/2;</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">							})</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">							.attr(&quot;cx&quot;, getXPos)</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">							.attr(&quot;r&quot;, itemHeight / 2)</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">							.<span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;height&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>itemHeight</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>style</span><span class=pl-kos>(</span><span class=pl-s>&quot;fill&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>dColorPropName</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>color</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>color</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>if</span><span class=pl-kos>(</span> <span class=pl-s1>colorPropertyName</span> <span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">									<span class=pl-s1>dColorPropName</span> <span class=pl-c1>=</span> <span class=pl-s1>d</span><span class=pl-kos>[</span><span class=pl-s1>colorPropertyName</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">									<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>dColorPropName</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">										<span class=pl-k>return</span> <span class=pl-en>colorCycle</span><span class=pl-kos>(</span> <span class=pl-s1>dColorPropName</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">									<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">										<span class=pl-k>return</span> <span class=pl-en>colorCycle</span><span class=pl-kos>(</span> <span class=pl-s1>datum</span><span class=pl-kos>[</span><span class=pl-s1>colorPropertyName</span><span class=pl-kos>]</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">									<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>return</span> <span class=pl-en>colorCycle</span><span class=pl-kos>(</span><span class=pl-s1>index</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;mousemove&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">								<span class=pl-en>hover</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>,</span> <span class=pl-s1>datum</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;mouseover&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">								<span class=pl-en>mouseover</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s1>datum</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;mouseout&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">								<span class=pl-en>mouseout</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s1>datum</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;click&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>point</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-en>mouse</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>selectedRect</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-en>select</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>node</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>selectorLabel</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;text#&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>selectedRect</span><span class=pl-kos>.</span><span class=pl-c1>id</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;.textnumbers&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>selectedLabel</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-en>select</span><span class=pl-kos>(</span><span class=pl-s1>selectorLabel</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>node</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">								<span class=pl-en>click</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>,</span> <span class=pl-s1>datum</span><span class=pl-kos>,</span> <span class=pl-s1>selectedLabel</span><span class=pl-kos>,</span> <span class=pl-s1>selectedRect</span><span class=pl-kos>,</span> <span class=pl-s1>xScale</span><span class=pl-kos>.</span><span class=pl-en>invert</span><span class=pl-kos>(</span><span class=pl-s1>point</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>return</span> <span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>class</span> ? <span class=pl-s>&quot;timelineSeries_&quot;</span><span class=pl-c1>+</span><span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>class</span> : <span class=pl-s>&quot;timelineSeries_&quot;</span><span class=pl-c1>+</span><span class=pl-s1>index</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;id&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">								<span class=pl-c>// use deprecated id field</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>id</span> <span class=pl-c1>&amp;&amp;</span> !<span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>id</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">									<span class=pl-k>return</span> <span class=pl-s>&#39;timelineItem_&#39;</span><span class=pl-c1>+</span><span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>id</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>id</span> ? <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>id</span> : <span class=pl-s>&quot;timelineItem_&quot;</span><span class=pl-c1>+</span><span class=pl-s1>index</span><span class=pl-c1>+</span><span class=pl-s>&quot;_&quot;</span><span class=pl-c1>+</span><span class=pl-s1>i</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// appends the labels to the boxes - DAY/HOUR LABEL</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">						view.selectAll(&quot;svg&quot;)</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">							.data(data).<span class=pl-en>enter</span><span class=pl-kos>(</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&quot;text&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;textlabels&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;id&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>id</span> <span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;x&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-k>return</span> <span class=pl-en>getXTextPos</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>label</span><span class=pl-kos>,</span> <span class=pl-s>&#39;.textlabels&#39;</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;y&quot;</span><span class=pl-kos>,</span> <span class=pl-kos>(</span><span class=pl-en>getStackTextPosition</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>labelFloat</span><span class=pl-kos>)</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>text</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>label</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;click&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">								<span class=pl-c>// when clicking on the label, call the click for the rectangle with the same id</span></td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>point</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-en>mouse</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>id</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>id</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>labelSelector</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;text#&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>id</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;.textnumbers&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>selectedLabel</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-en>select</span><span class=pl-kos>(</span><span class=pl-s1>labelSelector</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>node</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>selector</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;rect#&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>id</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>selectedRect</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-en>select</span><span class=pl-kos>(</span><span class=pl-s1>selector</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>node</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">								<span class=pl-en>click</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>,</span> <span class=pl-s1>datum</span><span class=pl-kos>,</span> <span class=pl-s1>selectedLabel</span><span class=pl-kos>,</span> <span class=pl-s1>selectedRect</span><span class=pl-kos>,</span> <span class=pl-s1>xScale</span><span class=pl-kos>.</span><span class=pl-en>invert</span><span class=pl-kos>(</span><span class=pl-s1>point</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// appends the NUMBER LABEL</span></td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">						view.selectAll(&quot;svg&quot;).data(data).enter()</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">							.<span class=pl-en>filter</span><span class=pl-kos>(</span><span class=pl-k>function</span>(<span class=pl-s1>d</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>labelNumber</span> !== undefined<span class=pl-kos>;</span> <span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&quot;text&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;textnumbers&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;id&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>id</span> <span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;x&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-k>return</span> <span class=pl-en>getXTextPos</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>labelNumber</span><span class=pl-kos>,</span> <span class=pl-s>&#39;.textnumbers&#39;</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;y&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>getStackTextPosition</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>text</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>labelNumber</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;click&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">								<span class=pl-c>// when clicking on the label, call the click for the rectangle with the same id</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>point</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-en>mouse</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>id</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>id</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>selectedLabel</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-en>select</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>node</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>selector</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;rect#&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>id</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>var</span> <span class=pl-s1>selectedRect</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-en>select</span><span class=pl-kos>(</span><span class=pl-s1>selector</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>node</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">								<span class=pl-en>click</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>,</span> <span class=pl-s1>datum</span><span class=pl-kos>,</span> <span class=pl-s1>selectedLabel</span><span class=pl-kos>,</span> <span class=pl-s1>selectedRect</span><span class=pl-kos>,</span> <span class=pl-s1>xScale</span><span class=pl-kos>.</span><span class=pl-en>invert</span><span class=pl-kos>(</span><span class=pl-s1>point</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>rowSeparatorsColor</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">							<span class=pl-k>var</span> <span class=pl-s1>lineYAxis</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span> <span class=pl-s1>itemHeight</span> <span class=pl-c1>+</span> <span class=pl-s1>itemMargin</span> / <span class=pl-c1>2</span> <span class=pl-c1>+</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>itemHeight</span> <span class=pl-c1>+</span> <span class=pl-s1>itemMargin</span><span class=pl-kos>)</span> * <span class=pl-s1>yAxisMapping</span><span class=pl-kos>[</span><span class=pl-s1>index</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">							gParent.<span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&quot;svg:line&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;row-separator&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;x1&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>0</span> <span class=pl-c1>+</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;x2&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>right</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;y1&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>lineYAxis</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;y2&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>lineYAxis</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;stroke-width&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>1</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;stroke&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>rowSeparatorsColor</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// add the label</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>hasLabel</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-en>appendLabel</span><span class=pl-kos>(</span><span class=pl-s1>gParent</span><span class=pl-kos>,</span> <span class=pl-s1>yAxisMapping</span><span class=pl-kos>,</span> <span class=pl-s1>index</span><span class=pl-kos>,</span> <span class=pl-s1>hasLabel</span><span class=pl-kos>,</span> <span class=pl-s1>datum</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-k>typeof</span><span class=pl-kos>(</span><span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>icon</span><span class=pl-kos>)</span> !== <span class=pl-s>&quot;undefined&quot;</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>gParent</span><span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&quot;image&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;timeline-label&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;transform&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;translate(&quot;</span><span class=pl-c1>+</span> <span class=pl-c1>0</span> <span class=pl-c1>+</span><span class=pl-s>&quot;,&quot;</span><span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>itemHeight</span> <span class=pl-c1>+</span> <span class=pl-s1>itemMargin</span><span class=pl-kos>)</span> * <span class=pl-s1>yAxisMapping</span><span class=pl-kos>[</span><span class=pl-s1>index</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-c1>+</span><span class=pl-s>&quot;)&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;xlink:href&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>icon</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;width&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>left</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">								<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;height&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>itemHeight</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>function</span> <span class=pl-en>getStackPosition</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">							<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>stacked</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>return</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>itemHeight</span> <span class=pl-c1>+</span> <span class=pl-s1>itemMargin</span><span class=pl-kos>)</span> * <span class=pl-s1>yAxisMapping</span><span class=pl-kos>[</span><span class=pl-s1>index</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">							<span class=pl-k>return</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>top</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>function</span> <span class=pl-en>getStackTextPosition</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">							<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>stacked</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>return</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>itemHeight</span> <span class=pl-c1>+</span> <span class=pl-s1>itemMargin</span><span class=pl-kos>)</span> * <span class=pl-s1>yAxisMapping</span><span class=pl-kos>[</span><span class=pl-s1>index</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-s1>itemHeight</span> * <span class=pl-c1>0.75</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">							<span class=pl-k>return</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+</span> <span class=pl-s1>itemHeight</span> * <span class=pl-c1>0.75</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>belowLastItem</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>itemHeight</span> <span class=pl-c1>+</span> <span class=pl-s1>itemMargin</span><span class=pl-kos>)</span> * <span class=pl-s1>maxStack</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>aboveFirstItem</span> <span class=pl-c1>=</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>top</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>timeAxisYPosition</span> <span class=pl-c1>=</span> <span class=pl-s1>showAxisTop</span> ? <span class=pl-s1>aboveFirstItem</span> : <span class=pl-s1>belowLastItem</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>gX</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>showTimeAxis</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-s1>gX</span> <span class=pl-c1>=</span> <span class=pl-en>appendTimeAxis</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>,</span> <span class=pl-s1>xAxis</span><span class=pl-kos>,</span> <span class=pl-s1>timeAxisYPosition</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>timeAxisTick</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-en>appendTimeAxisTick</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>,</span> <span class=pl-s1>xAxis</span><span class=pl-kos>,</span> <span class=pl-s1>maxStack</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>width</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>gParentSize</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-c>// only if the scrolling should be allowed</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>var</span> <span class=pl-en>move</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>select</span><span class=pl-kos>(</span><span class=pl-s>&quot;.view&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;transform&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;translate(&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-c1>event</span><span class=pl-kos>.</span><span class=pl-c1>transform</span><span class=pl-kos>.</span><span class=pl-c1>x</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;,0)&quot;</span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">															 <span class=pl-c1>+</span> <span class=pl-s>&quot;scale(&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-c1>event</span><span class=pl-kos>.</span><span class=pl-c1>transform</span><span class=pl-kos>.</span><span class=pl-c1>k</span> <span class=pl-c1>+</span> <span class=pl-s>&quot; 1)&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>selectAll</span><span class=pl-kos>(</span><span class=pl-s>&quot;.timeline-xAxis&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;transform&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">								 <span class=pl-k>return</span> <span class=pl-s>&quot;translate(&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-c1>event</span><span class=pl-kos>.</span><span class=pl-c1>transform</span><span class=pl-kos>.</span><span class=pl-c1>x</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;, &quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>timeAxisYPosition</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;)&quot;</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">											<span class=pl-c1>+</span> <span class=pl-s>&quot;scale(&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-c1>event</span><span class=pl-kos>.</span><span class=pl-c1>transform</span><span class=pl-kos>.</span><span class=pl-c1>k</span> <span class=pl-c1>+</span> <span class=pl-s>&quot; 1)&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>new_xScale</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-c1>event</span><span class=pl-kos>.</span><span class=pl-c1>transform</span><span class=pl-kos>.</span><span class=pl-en>rescaleX</span><span class=pl-kos>(</span><span class=pl-s1>xScale</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>selectAll</span><span class=pl-kos>(</span><span class=pl-s>&#39;.timeline-xAxis&#39;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-s1>xAxis</span><span class=pl-kos>.</span><span class=pl-en>scale</span><span class=pl-kos>(</span><span class=pl-s1>new_xScale</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>xpos</span> <span class=pl-c1>=</span> <span class=pl-c1>-</span><span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-c1>event</span><span class=pl-kos>.</span><span class=pl-c1>transform</span><span class=pl-kos>.</span><span class=pl-c1>x</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">						<span class=pl-en>scroll</span><span class=pl-kos>(</span><span class=pl-s1>xpos</span><span class=pl-kos>,</span> <span class=pl-s1>xScale</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>zoom</span> <span class=pl-c1>=</span> <span class=pl-s1>d3Zoom</span><span class=pl-kos>.</span><span class=pl-en>zoom</span><span class=pl-kos>(</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>scaleExtent</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>maxZoom</span><span class=pl-kos>]</span><span class=pl-kos>)</span> <span class=pl-c>// max zoom defaults to 5</span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>translateExtent</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-kos>[</span><span class=pl-s1>width</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>]</span><span class=pl-kos>)</span> <span class=pl-c>// [x0, y0], [x1, y1] don&#39;t allow translating y-axis</span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;zoom&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>move</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>gParent</span></td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>classed</span><span class=pl-kos>(</span><span class=pl-s>&quot;scrollable&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>true</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-s1>zoom</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>! <span class=pl-s1>allowZoom</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;wheel&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-c1>event</span><span class=pl-kos>.</span><span class=pl-en>preventDefault</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-c1>event</span><span class=pl-kos>.</span><span class=pl-en>stopImmediatePropagation</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;dblclick.zoom&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-c1>event</span><span class=pl-kos>.</span><span class=pl-en>preventDefault</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-c1>event</span><span class=pl-kos>.</span><span class=pl-en>stopImmediatePropagation</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>rotateTicks</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>selectAll</span><span class=pl-kos>(</span><span class=pl-s>&quot;.tick text&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;transform&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">							<span class=pl-k>return</span> <span class=pl-s>&quot;rotate(&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>rotateTicks</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;)translate(&quot;</span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">															 <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>getBBox</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>width</span> / <span class=pl-c1>2</span> <span class=pl-c1>+</span> <span class=pl-c1>10</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;,&quot;</span> <span class=pl-c>// TODO: change this 10</span></td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">															 <span class=pl-c1>+</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>getBBox</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>height</span> / <span class=pl-c1>2</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;)&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// use the size of the elements added to the timeline to set the height</span></td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>//var gSize = g._groups[0][0].getBoundingClientRect();</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>gSize</span> <span class=pl-c1>=</span> <span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>node</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>getBoundingClientRect</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>setHeight</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>showBorderLine</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>each</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>datum</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">							<span class=pl-k>var</span> <span class=pl-s1>times</span> <span class=pl-c1>=</span> <span class=pl-s1>datum</span><span class=pl-kos>.</span><span class=pl-c1>times</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>times</span><span class=pl-kos>.</span><span class=pl-en>forEach</span><span class=pl-kos>(</span><span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>time</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">								<span class=pl-en>appendLine</span><span class=pl-kos>(</span><span class=pl-s1>xScale</span><span class=pl-kos>(</span><span class=pl-s1>time</span><span class=pl-kos>.</span><span class=pl-c1>starting_time</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>showBorderFormat</span><span class=pl-kos>,</span> <span class=pl-s1>showBorderLineClass</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">								<span class=pl-en>appendLine</span><span class=pl-kos>(</span><span class=pl-s1>xScale</span><span class=pl-kos>(</span><span class=pl-s1>time</span><span class=pl-kos>.</span><span class=pl-c1>ending_time</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>showBorderFormat</span><span class=pl-kos>,</span> <span class=pl-s1>showBorderLineClass</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>showTodayLine</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>var</span> <span class=pl-s1>todayLine</span> <span class=pl-c1>=</span> <span class=pl-s1>xScale</span><span class=pl-kos>(</span><span class=pl-k>new</span> <span class=pl-v>Date</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>appendLine</span><span class=pl-kos>(</span><span class=pl-s1>todayLine</span><span class=pl-kos>,</span> <span class=pl-s1>showTodayFormat</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>function</span> <span class=pl-en>getXPos</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>return</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>starting_time</span> <span class=pl-c1>-</span> <span class=pl-s1>beginning</span><span class=pl-kos>)</span> * <span class=pl-s1>scaleFactor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>function</span> <span class=pl-en>getTextWidth</span><span class=pl-kos>(</span><span class=pl-s1>text</span><span class=pl-kos>,</span> <span class=pl-s1>font</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// re-use canvas object for better performance</span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>canvas</span> <span class=pl-c1>=</span> <span class=pl-s1>getTextWidth</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span> <span class=pl-c1>||</span> <span class=pl-kos>(</span><span class=pl-s1>getTextWidth</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s>&quot;canvas&quot;</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>context</span> <span class=pl-c1>=</span> <span class=pl-s1>canvas</span><span class=pl-kos>.</span><span class=pl-en>getContext</span><span class=pl-kos>(</span><span class=pl-s>&quot;2d&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>font</span> <span class=pl-c1>=</span> <span class=pl-s1>font</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>metrics</span> <span class=pl-c1>=</span> <span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>measureText</span><span class=pl-kos>(</span><span class=pl-s1>text</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>return</span> <span class=pl-s1>metrics</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>function</span> <span class=pl-en>getXTextPos</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>,</span> <span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-s1>text</span><span class=pl-kos>,</span> <span class=pl-s1>style</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>var</span> <span class=pl-s1>width</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>ending_time</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>width</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>ending_time</span> <span class=pl-c1>-</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>starting_time</span><span class=pl-kos>)</span> / <span class=pl-c1>2</span><span class=pl-kos>)</span> * <span class=pl-s1>scaleFactor</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>text</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>style</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// get the style data for the class selector pass in</span></td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>textl</span> <span class=pl-c1>=</span> <span class=pl-en>getComputedStyle</span><span class=pl-kos>(</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s1>style</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// create a fontsize fontfamily string - 12pt Graphik</span></td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>fontInfo</span> <span class=pl-c1>=</span> <span class=pl-s1>textl</span><span class=pl-kos>.</span><span class=pl-c1>fontSize</span> <span class=pl-c1>+</span> <span class=pl-s>&#39; &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>textl</span><span class=pl-kos>.</span><span class=pl-c1>fontFamily</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// calculate the width of the text in that fontsize</span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>tl</span> <span class=pl-c1>=</span> <span class=pl-en>getTextWidth</span><span class=pl-kos>(</span><span class=pl-s1>text</span><span class=pl-kos>,</span> <span class=pl-s1>fontInfo</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// subtract half of the text length from the xPosition to keep the text centered</span></td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>textLength</span> <span class=pl-c1>=</span> <span class=pl-s1>tl</span> / <span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>var</span> <span class=pl-s1>xPosition</span> <span class=pl-c1>=</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>starting_time</span> <span class=pl-c1>-</span> <span class=pl-s1>beginning</span><span class=pl-kos>)</span> * <span class=pl-s1>scaleFactor</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-s1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>textLength</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>return</span> <span class=pl-s1>xPosition</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>return</span> <span class=pl-s1>margin</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>starting_time</span> <span class=pl-c1>-</span> <span class=pl-s1>beginning</span><span class=pl-kos>)</span> * <span class=pl-s1>scaleFactor</span> <span class=pl-c1>+</span> <span class=pl-c1>5</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>function</span> <span class=pl-en>setHeight</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>height</span> <span class=pl-c1>&amp;&amp;</span> !<span class=pl-s1>gParentSize</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>itemHeight</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">							<span class=pl-c>// set height based off of item height</span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>height</span> <span class=pl-c1>=</span> <span class=pl-s1>gSize</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>+</span> <span class=pl-s1>gSize</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>-</span> <span class=pl-s1>gParentSize</span><span class=pl-kos>.</span><span class=pl-c1>top</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">							<span class=pl-c>// set bounding rectangle height</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>d3Selection</span><span class=pl-kos>.</span><span class=pl-en>select</span><span class=pl-kos>(</span><span class=pl-s1>gParent</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>node</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;height&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>height</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">							<span class=pl-c>//select(view).node().attr(&quot;height&quot;, height);</span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">							<span class=pl-k>throw</span> <span class=pl-s>&quot;height of the timeline is not set&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>height</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>height</span> <span class=pl-c1>=</span> <span class=pl-s1>gParentSize</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>gParentItem</span><span class=pl-kos>.</span><span class=pl-en>node</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;height&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>height</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">							<span class=pl-c>//view.node().attr(&quot;height&quot;, height);</span></td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>function</span> <span class=pl-en>setWidth</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>width</span> <span class=pl-c1>&amp;&amp;</span> !<span class=pl-s1>gParentSize</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>try</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>width</span> <span class=pl-c1>=</span> <span class=pl-s1>gParentItem</span><span class=pl-kos>.</span><span class=pl-en>node</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;width&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">							<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>width</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">								<span class=pl-k>throw</span> <span class=pl-s>&quot;width of the timeline is not set. As of Firefox 27, timeline().with(x) needs to be explicitly set in order to render&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">							<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span> <span class=pl-k>catch</span> <span class=pl-kos>(</span><span class=pl-s1>err</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">							<span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span> <span class=pl-s1>err</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>width</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>gParentSize</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>try</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>width</span> <span class=pl-c1>=</span> <span class=pl-s1>gParentSize</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span> <span class=pl-k>catch</span> <span class=pl-kos>(</span><span class=pl-s1>err</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">							<span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span> <span class=pl-s1>err</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>// if both are set, do nothing</span></td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>function</span> <span class=pl-en>appendLine</span><span class=pl-kos>(</span><span class=pl-s1>lineScale</span><span class=pl-kos>,</span> <span class=pl-s1>lineFormat</span><span class=pl-kos>,</span> <span class=pl-s1>lineClass</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>lineClass</span> <span class=pl-c1>=</span> <span class=pl-s1>lineClass</span> <span class=pl-c1>||</span> <span class=pl-s>&quot;timeline-line&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">					view.<span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s>&quot;svg:line&quot;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;x1&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>lineScale</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;y1&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>lineFormat</span><span class=pl-kos>.</span><span class=pl-c1>marginTop</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;x2&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>lineScale</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;y2&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>height</span> <span class=pl-c1>-</span> <span class=pl-s1>lineFormat</span><span class=pl-kos>.</span><span class=pl-c1>marginBottom</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>attr</span><span class=pl-kos>(</span><span class=pl-s>&quot;class&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>lineClass</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>style</span><span class=pl-kos>(</span><span class=pl-s>&quot;stroke&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>lineFormat</span><span class=pl-kos>.</span><span class=pl-c1>color</span><span class=pl-kos>)</span><span class=pl-c>//&quot;rgb(6,120,155)&quot;</span></td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>.</span><span class=pl-en>style</span><span class=pl-kos>(</span><span class=pl-s>&quot;stroke-width&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>lineFormat</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// SETTINGS</span></td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>margin</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>p</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>margin</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>margin</span> <span class=pl-c1>=</span> <span class=pl-s1>p</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>orient</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>orientation</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>orient</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>orient</span> <span class=pl-c1>=</span> <span class=pl-s1>orientation</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>itemHeight</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>h</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>itemHeight</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>itemHeight</span> <span class=pl-c1>=</span> <span class=pl-s1>h</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>itemMargin</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>h</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>itemMargin</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>itemMargin</span> <span class=pl-c1>=</span> <span class=pl-s1>h</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>navMargin</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>h</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>navMargin</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>navMargin</span> <span class=pl-c1>=</span> <span class=pl-s1>h</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>height</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>h</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>height</span> <span class=pl-c1>=</span> <span class=pl-s1>h</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>width</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>w</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>width</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>width</span> <span class=pl-c1>=</span> <span class=pl-s1>w</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>display</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>displayType</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>||</span> <span class=pl-kos>(</span><span class=pl-c1>DISPLAY_TYPES</span><span class=pl-kos>.</span><span class=pl-en>indexOf</span><span class=pl-kos>(</span><span class=pl-s1>displayType</span><span class=pl-kos>)</span> <span class=pl-c1>==</span> <span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>display</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>display</span> <span class=pl-c1>=</span> <span class=pl-s1>displayType</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>labelFormat</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>f</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-en>labelFunction</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>labelFunction</span> <span class=pl-c1>=</span> <span class=pl-s1>f</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>tickFormat</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>format</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>tickFormat</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>tickFormat</span> <span class=pl-c1>=</span> <span class=pl-s1>format</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>allowZoom</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>zoomSetting</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>allowZoom</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>allowZoom</span> <span class=pl-c1>=</span> <span class=pl-s1>zoomSetting</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>maxZoom</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>max</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>maxZoom</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>maxZoom</span> <span class=pl-c1>=</span> <span class=pl-s1>max</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>hover</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>hoverFunc</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-en>hover</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>hover</span> <span class=pl-c1>=</span> <span class=pl-s1>hoverFunc</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>mouseover</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>mouseoverFunc</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-en>mouseover</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>mouseover</span> <span class=pl-c1>=</span> <span class=pl-s1>mouseoverFunc</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>mouseout</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>mouseoutFunc</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-en>mouseout</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>mouseout</span> <span class=pl-c1>=</span> <span class=pl-s1>mouseoutFunc</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>click</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>clickFunc</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-en>click</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>click</span> <span class=pl-c1>=</span> <span class=pl-s1>clickFunc</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>scroll</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>scrollFunc</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-en>scroll</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>scroll</span> <span class=pl-c1>=</span> <span class=pl-s1>scrollFunc</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>colors</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>colorFormat</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>colorCycle</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>colorCycle</span> <span class=pl-c1>=</span> <span class=pl-s1>colorFormat</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>beginning</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>beginning</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>beginning</span> <span class=pl-c1>=</span> <span class=pl-s1>b</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>ending</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>ending</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>ending</span> <span class=pl-c1>=</span> <span class=pl-s1>e</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>labelMargin</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>m</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>labelMargin</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>labelMargin</span> <span class=pl-c1>=</span> <span class=pl-s1>m</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>labelFloat</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>f</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>labelFloat</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>labelFloat</span> <span class=pl-c1>=</span> <span class=pl-s1>f</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>rotateTicks</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>degrees</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>rotateTicks</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>rotateTicks</span> <span class=pl-c1>=</span> <span class=pl-s1>degrees</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>stack</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>stacked</span> <span class=pl-c1>=</span> !<span class=pl-s1>stacked</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>relativeTime</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>timeIsRelative</span> <span class=pl-c1>=</span> !<span class=pl-s1>timeIsRelative</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>linearTime</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>timeIsLinear</span> <span class=pl-c1>=</span> !<span class=pl-s1>timeIsLinear</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>showBorderLine</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>showBorderLine</span> <span class=pl-c1>=</span> !<span class=pl-s1>showBorderLine</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>showBorderFormat</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>borderFormat</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>showBorderFormat</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>showBorderFormat</span> <span class=pl-c1>=</span> <span class=pl-s1>borderFormat</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// CSS class for the lines added by showBorder</span></td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>showBorderLineClass</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>borderClass</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>showBorderLineClass</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>showBorderLineClass</span> <span class=pl-c1>=</span> <span class=pl-s1>borderClass</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>showToday</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>showTodayLine</span> <span class=pl-c1>=</span> !<span class=pl-s1>showTodayLine</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>showTodayFormat</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>todayFormat</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>showTodayFormat</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>showTodayFormat</span> <span class=pl-c1>=</span> <span class=pl-s1>todayFormat</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>colorProperty</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>colorProp</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>colorPropertyName</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>colorPropertyName</span> <span class=pl-c1>=</span> <span class=pl-s1>colorProp</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>rowSeparators</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>color</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>rowSeparatorsColor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>rowSeparatorsColor</span> <span class=pl-c1>=</span> <span class=pl-s1>color</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>background</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>color</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>backgroundColor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>backgroundColor</span> <span class=pl-c1>=</span> <span class=pl-s1>color</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>showTimeAxis</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>showTimeAxis</span> <span class=pl-c1>=</span> !<span class=pl-s1>showTimeAxis</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>showAxisTop</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>showAxisTop</span> <span class=pl-c1>=</span> !<span class=pl-s1>showAxisTop</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>showAxisCalendarYear</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>showAxisCalendarYear</span> <span class=pl-c1>=</span> !<span class=pl-s1>showAxisCalendarYear</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>showTimeAxisTick</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>timeAxisTick</span> <span class=pl-c1>=</span> !<span class=pl-s1>timeAxisTick</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>fullLengthBackgrounds</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>fullLengthBackgrounds</span> <span class=pl-c1>=</span> !<span class=pl-s1>fullLengthBackgrounds</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>showTimeAxisTickFormat</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>format</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>timeAxisTickFormat</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>timeAxisTickFormat</span> <span class=pl-c1>=</span> <span class=pl-s1>format</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>showAxisHeaderBackground</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>bgColor</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>showAxisHeaderBackground</span> <span class=pl-c1>=</span> !<span class=pl-s1>showAxisHeaderBackground</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>bgColor</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-kos>(</span><span class=pl-s1>axisBgColor</span> <span class=pl-c1>=</span> <span class=pl-s1>bgColor</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// CSS class for the x-axis</span></td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>xAxisClass</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>axisClass</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-s1>xAxisClass</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>xAxisClass</span> <span class=pl-c1>=</span> <span class=pl-s1>axisClass</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>navigate</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-s1>navigateBackwards</span><span class=pl-kos>,</span> <span class=pl-s1>navigateForwards</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>)</span> <span class=pl-k>return</span> <span class=pl-kos>[</span><span class=pl-en>navigateLeft</span><span class=pl-kos>,</span> <span class=pl-en>navigateRight</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>navigateLeft</span> <span class=pl-c1>=</span> <span class=pl-s1>navigateBackwards</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>navigateRight</span> <span class=pl-c1>=</span> <span class=pl-s1>navigateForwards</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>showAxisNav</span> <span class=pl-c1>=</span> !<span class=pl-s1>showAxisNav</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>timelines</span><span class=pl-kos>.</span><span class=pl-en>version</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-s>&quot;1.0.0&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>return</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">	<span class=pl-s1>exports</span><span class=pl-kos>.</span><span class=pl-c1>timelines</span> <span class=pl-c1>=</span> <span class=pl-en>timelines</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">	<span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>defineProperty</span><span class=pl-kos>(</span><span class=pl-s1>exports</span><span class=pl-kos>,</span> <span class=pl-s>&#39;__esModule&#39;</span><span class=pl-kos>,</span> <span class=pl-kos>{</span> <span class=pl-c1>value</span>: <span class=pl-c1>true</span> <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/denisemauldin/d3-timeline/blame/8f257b2aa344cd8c9dc6e986d379ed97b388a1cd/dist/d3-timelines.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/denisemauldin/d3-timeline/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get">
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>

    <div class="Popover anim-scale-in js-tagsearch-popover"
     hidden
     data-tagsearch-url="/denisemauldin/d3-timeline/find-symbols"
     data-tagsearch-ref="master"
     data-tagsearch-path="dist/d3-timelines.js"
     data-tagsearch-lang="JavaScript"
     data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:94921267,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denisemauldin/d3-timeline/blob/master/dist/d3-timelines.js&quot;,&quot;user_id&quot;:31630735}}"
     data-hydro-click-hmac="a7bc000b65a4a42422737ec0f36f922c1ac41f7bf1e35c2f06132da404534d8d">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box box-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2020 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>

    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" async="async" integrity="sha512-WcQmT2vhcClFVOaaAJV/M+HqsJ2Gq/myvl6F3gCVBxykazXTs+i5fvxncSXwyG1CSfcrqmLFw/R/bmFYzprX2A==" type="application/javascript" id="js-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-59c4264f.js"></script>
    <script crossorigin="anonymous" integrity="sha512-GJ+rI3xS8ODYKKEFc+HfawMZf5+hyokJaDIrfJyxTm69Gaxw/2nUP8ZYS7hoLGgn+6ZO9augKURQ+xj+yYykUg==" type="application/javascript" src="https://github.githubassets.com/assets/environment-bootstrap-189fab23.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-JfA9c00QqdFAVbQaARMl2BJ+QwABPJ247GKHsBbdm7xq2P00Z6cmwPG7cFFXV0SVHPlKz8EqPiJeZDOZZTRFww==" type="application/javascript" src="https://github.githubassets.com/assets/vendor-25f03d73.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-eWd2P+dR32x2wrP6wRHabQGmKVm9UQkNvyrnD8Kh/HavXqs3y0vULsz5exwjQOygebBXfSTrbaKHp0CA081JqQ==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-7967763f.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-qNck4uBUujM3QjLSLkLWihUtC1bnWx7Mh9f0vyUes/cuLqo0ItSi/0RrA4qe/eh/tHBdatFIHvfvbrvKDr2I8g==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-a8d724e2.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>


  </body>
</html>

