



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-2183c9ef0ad524d4a1656028c0caefca37600a2ee3d0883a8a93d64adf040c60.css" integrity="sha256-IYPJ7wrVJNShZWAowMrvyjdgCi7j0Ig6ipPWSt8EDGA=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-20005947e98df6742b539f3bf53fee3fbd341ce7ae3c64d1005cedd814f05fdb.css" integrity="sha256-IABZR+mN9nQrU5879T/uP700HOeuPGTRAFzt2BTwX9s=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-88471af1fec40ff9418efbe2ddd15b6896af8d772f8179004c254dffc25ea490.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-5ad6c62cd35a3984bde17162ecb87f37cf949baf61f4f9e73f8d0e82fea4f091.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>Leaflet.draw/leaflet.draw.js at master · Leaflet/Leaflet.draw</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars0.githubusercontent.com/u/2854298?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="Leaflet/Leaflet.draw" name="twitter:title" /><meta content="Leaflet.draw - Vector drawing and editing plugin for Leaflet" name="twitter:description" />
      <meta content="https://avatars0.githubusercontent.com/u/2854298?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="Leaflet/Leaflet.draw" property="og:title" /><meta content="https://github.com/Leaflet/Leaflet.draw" property="og:url" /><meta content="Leaflet.draw - Vector drawing and editing plugin for Leaflet" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/OTIwOTA2OjViNDUzNmViZTBkYTIzZDAwNWNhZjFkNDBiMmE5YWY0OjMxMDQzZGM1YzU5MGQwOWM2MThiOWExNTRlZTFiNDRkNmNkOWNiYTM2NDkxZjI3MzVkOWNmZWZmNzNjNzZiNzI=--0cdad513d1d9e4dbffa2d455c2910aa93174b020">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">
    <meta name="request-id" content="C3D41D55:1E975:B49AAE:57D90B9B" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="C3D41D55:1E975:B49AAE:57D90B9B" name="octolytics-dimension-request_id" /><meta content="920906" name="octolytics-actor-id" /><meta content="jrmcdonald" name="octolytics-actor-login" /><meta content="0a5a8d4c1c08de963701854dadc824f9e3c37e834423d589a1404adc0b176378" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="jrmcdonald">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="YmIzNGE5YTMzMTRjYWM3N2ZmNmFlMjhiYjdjNWRlMWZlMDQ1N2U2N2U0MTdhMTA1NGM0OWE3YjA2NWI5YTdkN3x7InJlbW90ZV9hZGRyZXNzIjoiMTk1LjIxMi4yOS44NSIsInJlcXVlc3RfaWQiOiJDM0Q0MUQ1NToxRTk3NTpCNDlBQUU6NTdEOTBCOUIiLCJ0aW1lc3RhbXAiOjE0NzM4NDIwNzV9">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="9c83bf4cbe00f1576070003c8f2924d768984039">
    <meta content="39524c6594757e38146dc097fc8e937734a5a949" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="fb31f7220a93bab56a33925108503f09">
    

      
  <meta name="description" content="Leaflet.draw - Vector drawing and editing plugin for Leaflet">
  <meta name="go-import" content="github.com/Leaflet/Leaflet.draw git https://github.com/Leaflet/Leaflet.draw.git">

  <meta content="2854298" name="octolytics-dimension-user_id" /><meta content="Leaflet" name="octolytics-dimension-user_login" /><meta content="4555894" name="octolytics-dimension-repository_id" /><meta content="Leaflet/Leaflet.draw" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4555894" name="octolytics-dimension-repository_network_root_id" /><meta content="Leaflet/Leaflet.draw" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Leaflet/Leaflet.draw/commits/master.atom" rel="alternate" title="Recent Commits to Leaflet.draw:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/Leaflet/Leaflet.draw/blob/master/dist/leaflet.draw.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Leaflet/Leaflet.draw/search" class="js-site-search-form" data-scoped-search-url="/Leaflet/Leaflet.draw/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:920906" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="Leaflet/Leaflet.draw">This repository</span>
  </div>
    <a class="dropdown-item" href="/Leaflet/Leaflet.draw/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/jrmcdonald"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@jrmcdonald" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/920906?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">jrmcdonald</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/jrmcdonald" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
          <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
            Your stars
          </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="39524c6594757e38146dc097fc8e937734a5a949" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bZb9nXuDSe1bi9YVx4DYcWVHoSdpZAkE4hk2UKfvluMX/80la3RTZAjxUwdWy29H3Km0Gfy7ScPD9nP9e/Xczg==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="39524c6594757e38146dc097fc8e937734a5a949" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="pfqcyxycnspaS7nWN8bAThTIGkAhFioIeBrEBsCe4GOnylHJHq5UZcKqn/pWlleRheM+6vKWT1L/OwqGnweeeA==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="4555894" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/Leaflet/Leaflet.draw/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/Leaflet/Leaflet.draw/watchers"
            aria-label="88 users are watching this repository">
            88
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Leaflet/Leaflet.draw/unstar" class="starred" data-form-nonce="39524c6594757e38146dc097fc8e937734a5a949" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="PFx+hUw7lvu8nfFsHeZKGddKTJhSwoTjmJFTYsU3mQucV29/UcQe/JIWyxuetDZpf3BEfYl1NEWJBYTYHcnR1g==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar Leaflet/Leaflet.draw"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/Leaflet/Leaflet.draw/stargazers"
           aria-label="855 users starred this repository">
          855
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Leaflet/Leaflet.draw/star" class="unstarred" data-form-nonce="39524c6594757e38146dc097fc8e937734a5a949" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="WmgY0WxeLGGkaaVLstOlptYzk6EuldFpPUciWShwuxHTDFAH8mRIakbxwnOGXaK7xb6WUwjKYoZmBFmC8hrOfg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star Leaflet/Leaflet.draw"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/Leaflet/Leaflet.draw/stargazers"
           aria-label="855 users starred this repository">
          855
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Leaflet/Leaflet.draw/fork" class="btn-with-count" data-form-nonce="39524c6594757e38146dc097fc8e937734a5a949" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="pnE8VCxSmotRit8e8Eff+rcl6EE39ZtU7VBmYBjFlfeYX886ecYX8cyh0HoczHrNkmcArqcQVhZbor6BBECjHA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of Leaflet/Leaflet.draw to your account"
                aria-label="Fork your own copy of Leaflet/Leaflet.draw to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/Leaflet/Leaflet.draw/network" class="social-count"
       aria-label="547 users are forked this repository">
      547
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/Leaflet" class="url fn" rel="author">Leaflet</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/Leaflet/Leaflet.draw" data-pjax="#js-repo-pjax-container">Leaflet.draw</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/Leaflet/Leaflet.draw" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Leaflet/Leaflet.draw" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/Leaflet/Leaflet.draw/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /Leaflet/Leaflet.draw/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">155</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/Leaflet/Leaflet.draw/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /Leaflet/Leaflet.draw/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">39</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a href="/Leaflet/Leaflet.draw/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /Leaflet/Leaflet.draw/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
      Wiki
</a>

  <a href="/Leaflet/Leaflet.draw/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /Leaflet/Leaflet.draw/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/Leaflet/Leaflet.draw/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /Leaflet/Leaflet.draw/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/Leaflet/Leaflet.draw/blob/39a256e8dcc28a98908cd3f81ea2827b3f9a9c3d/dist/leaflet.draw.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:a67195ed437ec0963657e6719090c5c9 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Leaflet/Leaflet.draw/blob/0.2/dist/leaflet.draw.js"
               data-name="0.2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Leaflet/Leaflet.draw/blob/0.3.1/dist/leaflet.draw.js"
               data-name="0.3.1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                0.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Leaflet/Leaflet.draw/blob/gh-pages/dist/leaflet.draw.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Leaflet/Leaflet.draw/blob/integrating-toolbar/dist/leaflet.draw.js"
               data-name="integrating-toolbar"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                integrating-toolbar
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Leaflet/Leaflet.draw/blob/leaflet-master/dist/leaflet.draw.js"
               data-name="leaflet-master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                leaflet-master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/Leaflet/Leaflet.draw/blob/master/dist/leaflet.draw.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Leaflet/Leaflet.draw/blob/native-latlngclone/dist/leaflet.draw.js"
               data-name="native-latlngclone"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                native-latlngclone
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Leaflet/Leaflet.draw/blob/revert-354-leaflet-toolbar-plugin/dist/leaflet.draw.js"
               data-name="revert-354-leaflet-toolbar-plugin"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                revert-354-leaflet-toolbar-plugin
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Leaflet/Leaflet.draw/blob/snkashis-patch-1/dist/leaflet.draw.js"
               data-name="snkashis-patch-1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                snkashis-patch-1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Leaflet/Leaflet.draw/blob/v0.3.x/dist/leaflet.draw.js"
               data-name="v0.3.x"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v0.3.x
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.draw/tree/v0.3.2/dist/leaflet.draw.js"
              data-name="v0.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.2">
                v0.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.draw/tree/v0.3.1-beta.1/dist/leaflet.draw.js"
              data-name="v0.3.1-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.1-beta.1">
                v0.3.1-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.draw/tree/v0.3.0/dist/leaflet.draw.js"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.draw/tree/v0.2.4/dist/leaflet.draw.js"
              data-name="v0.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.4">
                v0.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.draw/tree/v0.2.1/dist/leaflet.draw.js"
              data-name="v0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.1">
                v0.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.draw/tree/v0.2.0/dist/leaflet.draw.js"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.draw/tree/v0.1.7/dist/leaflet.draw.js"
              data-name="v0.1.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.7">
                v0.1.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.draw/tree/0.2.3/dist/leaflet.draw.js"
              data-name="0.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.2.3">
                0.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Leaflet/Leaflet.draw/tree/0.2.2/dist/leaflet.draw.js"
              data-name="0.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.2.2">
                0.2.2
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group float-right">
    <a href="/Leaflet/Leaflet.draw/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/Leaflet/Leaflet.draw"><span>Leaflet.draw</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/Leaflet/Leaflet.draw/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">leaflet.draw.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/Leaflet/Leaflet.draw/commit/e1aaa958b8a6c6dc10a0bd44bb8b599befd9b85b" data-pjax>
          e1aaa95
        </a>
        <relative-time datetime="2016-08-04T17:11:53Z">Aug 4, 2016</relative-time>
      </span>
      <div>
        <img alt="@ddproxy" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/105473?v=3&amp;s=40" width="20" />
        <a href="/ddproxy" class="user-mention" rel="contributor">ddproxy</a>
          <a href="/Leaflet/Leaflet.draw/commit/e1aaa958b8a6c6dc10a0bd44bb8b599befd9b85b" class="message" data-pjax="true" title="New build files">New build files</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>10</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="jacobtoye" href="/Leaflet/Leaflet.draw/commits/master/dist/leaflet.draw.js?author=jacobtoye"><img alt="@jacobtoye" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/984586?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ddproxy" href="/Leaflet/Leaflet.draw/commits/master/dist/leaflet.draw.js?author=ddproxy"><img alt="@ddproxy" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/105473?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="olivierpichon" href="/Leaflet/Leaflet.draw/commits/master/dist/leaflet.draw.js?author=olivierpichon"><img alt="@olivierpichon" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/3260198?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="northerneyes" href="/Leaflet/Leaflet.draw/commits/master/dist/leaflet.draw.js?author=northerneyes"><img alt="@northerneyes" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1038904?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="michaelguild13" href="/Leaflet/Leaflet.draw/commits/master/dist/leaflet.draw.js?author=michaelguild13"><img alt="@michaelguild13" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/989574?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="JamesMilnerUK" href="/Leaflet/Leaflet.draw/commits/master/dist/leaflet.draw.js?author=JamesMilnerUK"><img alt="@JamesMilnerUK" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/8822075?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jonnyscholes" href="/Leaflet/Leaflet.draw/commits/master/dist/leaflet.draw.js?author=jonnyscholes"><img alt="@jonnyscholes" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1259367?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Starefossen" href="/Leaflet/Leaflet.draw/commits/master/dist/leaflet.draw.js?author=Starefossen"><img alt="@Starefossen" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/968267?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jayhogan" href="/Leaflet/Leaflet.draw/commits/master/dist/leaflet.draw.js?author=jayhogan"><img alt="@jayhogan" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1163339?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jvgriffis" href="/Leaflet/Leaflet.draw/commits/master/dist/leaflet.draw.js?author=jvgriffis"><img alt="@jvgriffis" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1899455?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@jacobtoye" height="24" src="https://avatars3.githubusercontent.com/u/984586?v=3&amp;s=48" width="24" />
            <a href="/jacobtoye">jacobtoye</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ddproxy" height="24" src="https://avatars2.githubusercontent.com/u/105473?v=3&amp;s=48" width="24" />
            <a href="/ddproxy">ddproxy</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@olivierpichon" height="24" src="https://avatars2.githubusercontent.com/u/3260198?v=3&amp;s=48" width="24" />
            <a href="/olivierpichon">olivierpichon</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@northerneyes" height="24" src="https://avatars1.githubusercontent.com/u/1038904?v=3&amp;s=48" width="24" />
            <a href="/northerneyes">northerneyes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@michaelguild13" height="24" src="https://avatars2.githubusercontent.com/u/989574?v=3&amp;s=48" width="24" />
            <a href="/michaelguild13">michaelguild13</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@JamesMilnerUK" height="24" src="https://avatars0.githubusercontent.com/u/8822075?v=3&amp;s=48" width="24" />
            <a href="/JamesMilnerUK">JamesMilnerUK</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jonnyscholes" height="24" src="https://avatars2.githubusercontent.com/u/1259367?v=3&amp;s=48" width="24" />
            <a href="/jonnyscholes">jonnyscholes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Starefossen" height="24" src="https://avatars3.githubusercontent.com/u/968267?v=3&amp;s=48" width="24" />
            <a href="/Starefossen">Starefossen</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jayhogan" height="24" src="https://avatars3.githubusercontent.com/u/1163339?v=3&amp;s=48" width="24" />
            <a href="/jayhogan">jayhogan</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jvgriffis" height="24" src="https://avatars2.githubusercontent.com/u/1899455?v=3&amp;s=48" width="24" />
            <a href="/jvgriffis">jvgriffis</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/Leaflet/Leaflet.draw/raw/master/dist/leaflet.draw.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/Leaflet/Leaflet.draw/blame/master/dist/leaflet.draw.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/Leaflet/Leaflet.draw/commits/master/dist/leaflet.draw.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Leaflet/Leaflet.draw/edit/master/dist/leaflet.draw.js" class="inline-form js-update-url-with-hash" data-form-nonce="39524c6594757e38146dc097fc8e937734a5a949" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vAlQ2CxhKaVi5n8hGMc4id8e7BmDY5axBatdMIOg1WjEHSxIRpYAdMEWC88Pkx0nmiZj4Gv7Gls1qVtxWV1FhQ==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Leaflet/Leaflet.draw/delete/master/dist/leaflet.draw.js" class="inline-form" data-form-nonce="39524c6594757e38146dc097fc8e937734a5a949" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bqAFxIdmqlUgGHw1Cylv/6xxzVLSnwMKp9o4F0DCh+SvFUQP5kuSKx4WO9W/s8eog1+i/65suPFUsf0YHtJe/g==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      9 lines (8 sloc)
      <span class="file-info-divider"></span>
    56.2 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">/*</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">	Leaflet.draw, a plugin that adds drawing and editing tools to Leaflet powered maps.</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">	(c) 2012-2016, Jacob Toye, Smartrak, Leaflet</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">	https://github.com/Leaflet/Leaflet.draw</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">	http://leafletjs.com</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">*/</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">!function(t,e,i){L.drawVersion=&quot;0.3.0-dev&quot;,L.drawLocal={draw:{toolbar:{actions:{title:&quot;Cancel drawing&quot;,text:&quot;Cancel&quot;},finish:{title:&quot;Finish drawing&quot;,text:&quot;Finish&quot;},undo:{title:&quot;Delete last point drawn&quot;,text:&quot;Delete last point&quot;},buttons:{polyline:&quot;Draw a polyline&quot;,polygon:&quot;Draw a polygon&quot;,rectangle:&quot;Draw a rectangle&quot;,circle:&quot;Draw a circle&quot;,marker:&quot;Draw a marker&quot;}},handlers:{circle:{tooltip:{start:&quot;Click and drag to draw circle.&quot;},radius:&quot;Radius&quot;},marker:{tooltip:{start:&quot;Click map to place marker.&quot;}},polygon:{tooltip:{start:&quot;Click to start drawing shape.&quot;,cont:&quot;Click to continue drawing shape.&quot;,end:&quot;Click first point to close this shape.&quot;}},polyline:{error:&quot;&lt;strong&gt;Error:&lt;/strong&gt; shape edges cannot cross!&quot;,tooltip:{start:&quot;Click to start drawing line.&quot;,cont:&quot;Click to continue drawing line.&quot;,end:&quot;Click last point to finish line.&quot;}},rectangle:{tooltip:{start:&quot;Click and drag to draw rectangle.&quot;}},simpleshape:{tooltip:{end:&quot;Release mouse to finish drawing.&quot;}}}},edit:{toolbar:{actions:{save:{title:&quot;Save changes.&quot;,text:&quot;Save&quot;},cancel:{title:&quot;Cancel editing, discards all changes.&quot;,text:&quot;Cancel&quot;}},buttons:{edit:&quot;Edit layers.&quot;,editDisabled:&quot;No layers to edit.&quot;,remove:&quot;Delete layers.&quot;,removeDisabled:&quot;No layers to delete.&quot;}},handlers:{edit:{tooltip:{text:&quot;Drag handles, or marker to edit feature.&quot;,subtext:&quot;Click cancel to undo changes.&quot;}},remove:{tooltip:{text:&quot;Click on a feature to remove&quot;}}}}},L.Draw={},L.Draw.Feature=L.Handler.extend({includes:L.Mixin.Events,initialize:function(t,e){this._map=t,this._container=t._container,this._overlayPane=t._panes.overlayPane,this._popupPane=t._panes.popupPane,e&amp;&amp;e.shapeOptions&amp;&amp;(e.shapeOptions=L.Util.extend({},this.options.shapeOptions,e.shapeOptions)),L.setOptions(this,e)},enable:function(){this._enabled||(L.Handler.prototype.enable.call(this),this.fire(&quot;enabled&quot;,{handler:this.type}),this._map.fire(&quot;draw:drawstart&quot;,{layerType:this.type}))},disable:function(){this._enabled&amp;&amp;(L.Handler.prototype.disable.call(this),this._map.fire(&quot;draw:drawstop&quot;,{layerType:this.type}),this.fire(&quot;disabled&quot;,{handler:this.type}))},addHooks:function(){var t=this._map;t&amp;&amp;(L.DomUtil.disableTextSelection(),t.getContainer().focus(),this._tooltip=new L.Tooltip(this._map),L.DomEvent.on(this._container,&quot;keyup&quot;,this._cancelDrawing,this))},removeHooks:function(){this._map&amp;&amp;(L.DomUtil.enableTextSelection(),this._tooltip.dispose(),this._tooltip=null,L.DomEvent.off(this._container,&quot;keyup&quot;,this._cancelDrawing,this))},setOptions:function(t){L.setOptions(this,t)},_fireCreatedEvent:function(t){this._map.fire(&quot;draw:created&quot;,{layer:t,layerType:this.type})},_cancelDrawing:function(t){this._map.fire(&quot;draw:canceled&quot;,{layerType:this.type}),27===t.keyCode&amp;&amp;this.disable()}}),L.Draw.Polyline=L.Draw.Feature.extend({statics:{TYPE:&quot;polyline&quot;},Poly:L.Polyline,options:{allowIntersection:!0,repeatMode:!1,drawError:{color:&quot;#b00b00&quot;,timeout:2500},icon:new L.DivIcon({iconSize:new L.Point(8,8),className:&quot;leaflet-div-icon leaflet-editing-icon&quot;}),touchIcon:new L.DivIcon({iconSize:new L.Point(20,20),className:&quot;leaflet-div-icon leaflet-editing-icon leaflet-touch-icon&quot;}),guidelineDistance:20,maxGuideLineLength:4e3,shapeOptions:{stroke:!0,color:&quot;#f06eaa&quot;,weight:4,opacity:.5,fill:!1,clickable:!0},metric:!0,feet:!0,showLength:!0,zIndexOffset:2e3},initialize:function(t,e){L.Browser.touch&amp;&amp;(this.options.icon=this.options.touchIcon),this.options.drawError.message=L.drawLocal.draw.handlers.polyline.error,e&amp;&amp;e.drawError&amp;&amp;(e.drawError=L.Util.extend({},this.options.drawError,e.drawError)),this.type=L.Draw.Polyline.TYPE,L.Draw.Feature.prototype.initialize.call(this,t,e)},addHooks:function(){L.Draw.Feature.prototype.addHooks.call(this),this._map&amp;&amp;(this._markers=[],this._markerGroup=new L.LayerGroup,this._map.addLayer(this._markerGroup),this._poly=new L.Polyline([],this.options.shapeOptions),this._tooltip.updateContent(this._getTooltipText()),this._mouseMarker||(this._mouseMarker=L.marker(this._map.getCenter(),{icon:L.divIcon({className:&quot;leaflet-mouse-marker&quot;,iconAnchor:[20,20],iconSize:[40,40]}),opacity:0,zIndexOffset:this.options.zIndexOffset})),L.Browser.touch||this._map.on(&quot;mouseup&quot;,this._onMouseUp,this),this._mouseMarker.on(&quot;mousedown&quot;,this._onMouseDown,this).on(&quot;mouseout&quot;,this._onMouseOut,this).on(&quot;mouseup&quot;,this._onMouseUp,this).on(&quot;mousemove&quot;,this._onMouseMove,this).addTo(this._map),this._map.on(&quot;mouseup&quot;,this._onMouseUp,this).on(&quot;mousemove&quot;,this._onMouseMove,this).on(&quot;zoomlevelschange&quot;,this._onZoomEnd,this).on(&quot;click&quot;,this._onTouch,this).on(&quot;zoomend&quot;,this._onZoomEnd,this))},removeHooks:function(){L.Draw.Feature.prototype.removeHooks.call(this),this._clearHideErrorTimeout(),this._cleanUpShape(),this._map.removeLayer(this._markerGroup),delete this._markerGroup,delete this._markers,this._map.removeLayer(this._poly),delete this._poly,this._mouseMarker.off(&quot;mousedown&quot;,this._onMouseDown,this).off(&quot;mouseout&quot;,this._onMouseOut,this).off(&quot;mouseup&quot;,this._onMouseUp,this).off(&quot;mousemove&quot;,this._onMouseMove,this),this._map.removeLayer(this._mouseMarker),delete this._mouseMarker,this._clearGuides(),this._map.off(&quot;mouseup&quot;,this._onMouseUp,this).off(&quot;mousemove&quot;,this._onMouseMove,this).off(&quot;zoomlevelschange&quot;,this._onZoomEnd,this).off(&quot;zoomend&quot;,this._onZoomEnd,this).off(&quot;click&quot;,this._onTouch,this)},deleteLastVertex:function(){if(!(this._markers.length&lt;=1)){var t=this._markers.pop(),e=this._poly,i=this._poly.spliceLatLngs(e.getLatLngs().length-1,1)[0];this._markerGroup.removeLayer(t),e.getLatLngs().length&lt;2&amp;&amp;this._map.removeLayer(e),this._vertexChanged(i,!1)}},addVertex:function(t){var e=this._markers.length;return e&gt;0&amp;&amp;!this.options.allowIntersection&amp;&amp;this._poly.newLatLngIntersects(t)?void this._showErrorTooltip():(this._errorShown&amp;&amp;this._hideErrorTooltip(),this._markers.push(this._createMarker(t)),this._poly.addLatLng(t),2===this._poly.getLatLngs().length&amp;&amp;this._map.addLayer(this._poly),void this._vertexChanged(t,!0))},completeShape:function(){this._markers.length&lt;=1||(this._fireCreatedEvent(),this.disable(),this.options.repeatMode&amp;&amp;this.enable())},_finishShape:function(){var t=this._poly.newLatLngIntersects(this._poly.getLatLngs()[this._poly.getLatLngs().length-1]);return!this.options.allowIntersection&amp;&amp;t||!this._shapeIsValid()?void this._showErrorTooltip():(this._fireCreatedEvent(),this.disable(),void(this.options.repeatMode&amp;&amp;this.enable()))},_shapeIsValid:function(){return!0},_onZoomEnd:function(){null!==this._markers&amp;&amp;this._updateGuide()},_onMouseMove:function(t){var e=this._map.mouseEventToLayerPoint(t.originalEvent),i=this._map.layerPointToLatLng(e);this._currentLatLng=i,this._updateTooltip(i),this._updateGuide(e),this._mouseMarker.setLatLng(i),L.DomEvent.preventDefault(t.originalEvent)},_vertexChanged:function(t,e){this._map.fire(&quot;draw:drawvertex&quot;,{layers:this._markerGroup}),this._updateFinishHandler(),this._updateRunningMeasure(t,e),this._clearGuides(),this._updateTooltip()},_onMouseDown:function(t){var e=t.originalEvent;this._mouseDownOrigin=L.point(e.clientX,e.clientY)},_onMouseUp:function(e){if(this._mouseDownOrigin){var i=L.point(e.originalEvent.clientX,e.originalEvent.clientY).distanceTo(this._mouseDownOrigin);Math.abs(i)&lt;9*(t.devicePixelRatio||1)&amp;&amp;this.addVertex(e.latlng)}this._mouseDownOrigin=null},_onTouch:function(t){L.Browser.touch&amp;&amp;(this._onMouseDown(t),this._onMouseUp(t))},_onMouseOut:function(){this._tooltip&amp;&amp;this._tooltip._onMouseOut.call(this._tooltip)},_updateFinishHandler:function(){var t=this._markers.length;t&gt;1&amp;&amp;this._markers[t-1].on(&quot;click&quot;,this._finishShape,this),t&gt;2&amp;&amp;this._markers[t-2].off(&quot;click&quot;,this._finishShape,this)},_createMarker:function(t){var e=new L.Marker(t,{icon:this.options.icon,zIndexOffset:2*this.options.zIndexOffset});return this._markerGroup.addLayer(e),e},_updateGuide:function(t){var e=this._markers?this._markers.length:0;e&gt;0&amp;&amp;(t=t||this._map.latLngToLayerPoint(this._currentLatLng),this._clearGuides(),this._drawGuide(this._map.latLngToLayerPoint(this._markers[e-1].getLatLng()),t))},_updateTooltip:function(t){var e=this._getTooltipText();t&amp;&amp;this._tooltip.updatePosition(t),this._errorShown||this._tooltip.updateContent(e)},_drawGuide:function(t,e){var i,o,n,s=Math.floor(Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))),a=this.options.guidelineDistance,r=this.options.maxGuideLineLength,h=s&gt;r?s-r:a;for(this._guidesContainer||(this._guidesContainer=L.DomUtil.create(&quot;div&quot;,&quot;leaflet-draw-guides&quot;,this._overlayPane));s&gt;h;h+=this.options.guidelineDistance)i=h/s,o={x:Math.floor(t.x*(1-i)+i*e.x),y:Math.floor(t.y*(1-i)+i*e.y)},n=L.DomUtil.create(&quot;div&quot;,&quot;leaflet-draw-guide-dash&quot;,this._guidesContainer),n.style.backgroundColor=this._errorShown?this.options.drawError.color:this.options.shapeOptions.color,L.DomUtil.setPosition(n,o)},_updateGuideColor:function(t){if(this._guidesContainer)for(var e=0,i=this._guidesContainer.childNodes.length;i&gt;e;e++)this._guidesContainer.childNodes[e].style.backgroundColor=t},_clearGuides:function(){if(this._guidesContainer)for(;this._guidesContainer.firstChild;)this._guidesContainer.removeChild(this._guidesContainer.firstChild)},_getTooltipText:function(){var t,e,i=this.options.showLength;return 0===this._markers.length?t={text:L.drawLocal.draw.handlers.polyline.tooltip.start}:(e=i?this._getMeasurementString():&quot;&quot;,t=1===this._markers.length?{text:L.drawLocal.draw.handlers.polyline.tooltip.cont,subtext:e}:{text:L.drawLocal.draw.handlers.polyline.tooltip.end,subtext:e}),t},_updateRunningMeasure:function(t,e){var i,o,n=this._markers.length;1===this._markers.length?this._measurementRunningTotal=0:(i=n-(e?2:1),o=t.distanceTo(this._markers[i].getLatLng()),this._measurementRunningTotal+=o*(e?1:-1))},_getMeasurementString:function(){var t,e=this._currentLatLng,i=this._markers[this._markers.length-1].getLatLng();return t=this._measurementRunningTotal+e.distanceTo(i),L.GeometryUtil.readableDistance(t,this.options.metric,this.options.feet)},_showErrorTooltip:function(){this._errorShown=!0,this._tooltip.showAsError().updateContent({text:this.options.drawError.message}),this._updateGuideColor(this.options.drawError.color),this._poly.setStyle({color:this.options.drawError.color}),this._clearHideErrorTimeout(),this._hideErrorTimeout=setTimeout(L.Util.bind(this._hideErrorTooltip,this),this.options.drawError.timeout)},_hideErrorTooltip:function(){this._errorShown=!1,this._clearHideErrorTimeout(),this._tooltip.removeError().updateContent(this._getTooltipText()),this._updateGuideColor(this.options.shapeOptions.color),this._poly.setStyle({color:this.options.shapeOptions.color})},_clearHideErrorTimeout:function(){this._hideErrorTimeout&amp;&amp;(clearTimeout(this._hideErrorTimeout),this._hideErrorTimeout=null)},_cleanUpShape:function(){this._markers.length&gt;1&amp;&amp;this._markers[this._markers.length-1].off(&quot;click&quot;,this._finishShape,this)},_fireCreatedEvent:function(){var t=new this.Poly(this._poly.getLatLngs(),this.options.shapeOptions);L.Draw.Feature.prototype._fireCreatedEvent.call(this,t)}}),L.Draw.Polygon=L.Draw.Polyline.extend({statics:{TYPE:&quot;polygon&quot;},Poly:L.Polygon,options:{showArea:!1,shapeOptions:{stroke:!0,color:&quot;#f06eaa&quot;,weight:4,opacity:.5,fill:!0,fillColor:null,fillOpacity:.2,clickable:!0},metric:!0},initialize:function(t,e){L.Draw.Polyline.prototype.initialize.call(this,t,e),this.type=L.Draw.Polygon.TYPE},_updateFinishHandler:function(){var t=this._markers.length;1===t&amp;&amp;this._markers[0].on(&quot;click&quot;,this._finishShape,this),t&gt;2&amp;&amp;(this._markers[t-1].on(&quot;dblclick&quot;,this._finishShape,this),t&gt;3&amp;&amp;this._markers[t-2].off(&quot;dblclick&quot;,this._finishShape,this))},_getTooltipText:function(){var t,e;return 0===this._markers.length?t=L.drawLocal.draw.handlers.polygon.tooltip.start:this._markers.length&lt;3?t=L.drawLocal.draw.handlers.polygon.tooltip.cont:(t=L.drawLocal.draw.handlers.polygon.tooltip.end,e=this._getMeasurementString()),{text:t,subtext:e}},_getMeasurementString:function(){var t=this._area;return t?L.GeometryUtil.readableArea(t,this.options.metric):null},_shapeIsValid:function(){return this._markers.length&gt;=3},_vertexChanged:function(t,e){var i;!this.options.allowIntersection&amp;&amp;this.options.showArea&amp;&amp;(i=this._poly.getLatLngs(),this._area=L.GeometryUtil.geodesicArea(i)),L.Draw.Polyline.prototype._vertexChanged.call(this,t,e)},_cleanUpShape:function(){var t=this._markers.length;t&gt;0&amp;&amp;(this._markers[0].off(&quot;click&quot;,this._finishShape,this),t&gt;2&amp;&amp;this._markers[t-1].off(&quot;dblclick&quot;,this._finishShape,this))}}),L.SimpleShape={},L.Draw.SimpleShape=L.Draw.Feature.extend({options:{repeatMode:!1},initialize:function(t,e){this._endLabelText=L.drawLocal.draw.handlers.simpleshape.tooltip.end,L.Draw.Feature.prototype.initialize.call(this,t,e)},addHooks:function(){L.Draw.Feature.prototype.addHooks.call(this),this._map&amp;&amp;(this._mapDraggable=this._map.dragging.enabled(),this._mapDraggable&amp;&amp;this._map.dragging.disable(),this._container.style.cursor=&quot;crosshair&quot;,this._tooltip.updateContent({text:this._initialLabelText}),this._map.on(&quot;mousedown&quot;,this._onMouseDown,this).on(&quot;mousemove&quot;,this._onMouseMove,this).on(&quot;touchstart&quot;,this._onMouseDown,this).on(&quot;touchmove&quot;,this._onMouseMove,this))},removeHooks:function(){L.Draw.Feature.prototype.removeHooks.call(this),this._map&amp;&amp;(this._mapDraggable&amp;&amp;this._map.dragging.enable(),this._container.style.cursor=&quot;&quot;,this._map.off(&quot;mousedown&quot;,this._onMouseDown,this).off(&quot;mousemove&quot;,this._onMouseMove,this).off(&quot;touchstart&quot;,this._onMouseDown,this).off(&quot;touchmove&quot;,this._onMouseMove,this),L.DomEvent.off(e,&quot;mouseup&quot;,this._onMouseUp,this),L.DomEvent.off(e,&quot;touchend&quot;,this._onMouseUp,this),this._shape&amp;&amp;(this._map.removeLayer(this._shape),delete this._shape)),this._isDrawing=!1},_getTooltipText:function(){return{text:this._endLabelText}},_onMouseDown:function(t){this._isDrawing=!0,this._startLatLng=t.latlng,L.DomEvent.on(e,&quot;mouseup&quot;,this._onMouseUp,this).on(e,&quot;touchend&quot;,this._onMouseUp,this).preventDefault(t.originalEvent)},_onMouseMove:function(t){var e=t.latlng;this._tooltip.updatePosition(e),this._isDrawing&amp;&amp;(this._tooltip.updateContent(this._getTooltipText()),this._drawShape(e))},_onMouseUp:function(){this._shape&amp;&amp;this._fireCreatedEvent(),this.disable(),this.options.repeatMode&amp;&amp;this.enable()}}),L.Draw.Rectangle=L.Draw.SimpleShape.extend({statics:{TYPE:&quot;rectangle&quot;},options:{shapeOptions:{stroke:!0,color:&quot;#f06eaa&quot;,weight:4,opacity:.5,fill:!0,fillColor:null,fillOpacity:.2,clickable:!0},metric:!0},initialize:function(t,e){this.type=L.Draw.Rectangle.TYPE,this._initialLabelText=L.drawLocal.draw.handlers.rectangle.tooltip.start,L.Draw.SimpleShape.prototype.initialize.call(this,t,e)},_drawShape:function(t){this._shape?this._shape.setBounds(new L.LatLngBounds(this._startLatLng,t)):(this._shape=new L.Rectangle(new L.LatLngBounds(this._startLatLng,t),this.options.shapeOptions),this._map.addLayer(this._shape))},_fireCreatedEvent:function(){var t=new L.Rectangle(this._shape.getBounds(),this.options.shapeOptions);L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this,t)},_getTooltipText:function(){var t,e,i,o=L.Draw.SimpleShape.prototype._getTooltipText.call(this),n=this._shape;return n&amp;&amp;(t=this._shape.getLatLngs(),e=L.GeometryUtil.geodesicArea(t),i=L.GeometryUtil.readableArea(e,this.options.metric)),{text:o.text,subtext:i}}}),L.Draw.Circle=L.Draw.SimpleShape.extend({statics:{TYPE:&quot;circle&quot;},options:{shapeOptions:{stroke:!0,color:&quot;#f06eaa&quot;,weight:4,opacity:.5,fill:!0,fillColor:null,fillOpacity:.2,clickable:!0},showRadius:!0,metric:!0,feet:!0},initialize:function(t,e){this.type=L.Draw.Circle.TYPE,this._initialLabelText=L.drawLocal.draw.handlers.circle.tooltip.start,L.Draw.SimpleShape.prototype.initialize.call(this,t,e)},_drawShape:function(t){this._shape?this._shape.setRadius(this._startLatLng.distanceTo(t)):(this._shape=new L.Circle(this._startLatLng,this._startLatLng.distanceTo(t),this.options.shapeOptions),this._map.addLayer(this._shape))},_fireCreatedEvent:function(){var t=new L.Circle(this._startLatLng,this._shape.getRadius(),this.options.shapeOptions);L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this,t)},_onMouseMove:function(t){var e,i=t.latlng,o=this.options.showRadius,n=this.options.metric;this._tooltip.updatePosition(i),this._isDrawing&amp;&amp;(this._drawShape(i),e=this._shape.getRadius().toFixed(1),this._tooltip.updateContent({text:this._endLabelText,subtext:o?L.drawLocal.draw.handlers.circle.radius+&quot;: &quot;+L.GeometryUtil.readableDistance(e,n,this.options.feet):&quot;&quot;}))}}),L.Draw.Marker=L.Draw.Feature.extend({statics:{TYPE:&quot;marker&quot;},options:{icon:new L.Icon.Default,repeatMode:!1,zIndexOffset:2e3},initialize:function(t,e){this.type=L.Draw.Marker.TYPE,L.Draw.Feature.prototype.initialize.call(this,t,e)},addHooks:function(){L.Draw.Feature.prototype.addHooks.call(this),this._map&amp;&amp;(this._tooltip.updateContent({text:L.drawLocal.draw.handlers.marker.tooltip.start}),this._mouseMarker||(this._mouseMarker=L.marker(this._map.getCenter(),{icon:L.divIcon({className:&quot;leaflet-mouse-marker&quot;,iconAnchor:[20,20],iconSize:[40,40]}),opacity:0,zIndexOffset:this.options.zIndexOffset})),this._mouseMarker.on(&quot;click&quot;,this._onClick,this).addTo(this._map),this._map.on(&quot;mousemove&quot;,this._onMouseMove,this),this._map.on(&quot;click&quot;,this._onTouch,this))},removeHooks:function(){L.Draw.Feature.prototype.removeHooks.call(this),this._map&amp;&amp;(this._marker&amp;&amp;(this._marker.off(&quot;click&quot;,this._onClick,this),this._map.off(&quot;click&quot;,this._onClick,this).off(&quot;click&quot;,this._onTouch,this).removeLayer(this._marker),delete this._marker),this._mouseMarker.off(&quot;click&quot;,this._onClick,this),this._map.removeLayer(this._mouseMarker),delete this._mouseMarker,this._map.off(&quot;mousemove&quot;,this._onMouseMove,this))},_onMouseMove:function(t){var e=t.latlng;this._tooltip.updatePosition(e),this._mouseMarker.setLatLng(e),this._marker?(e=this._mouseMarker.getLatLng(),this._marker.setLatLng(e)):(this._marker=new L.Marker(e,{icon:this.options.icon,zIndexOffset:this.options.zIndexOffset}),this._marker.on(&quot;click&quot;,this._onClick,this),this._map.on(&quot;click&quot;,this._onClick,this).addLayer(this._marker))},_onClick:function(){this._fireCreatedEvent(),this.disable(),this.options.repeatMode&amp;&amp;this.enable()},_onTouch:function(t){this._onMouseMove(t),this._onClick()},_fireCreatedEvent:function(){var t=new L.Marker.Touch(this._marker.getLatLng(),{icon:this.options.icon});L.Draw.Feature.prototype._fireCreatedEvent.call(this,t)}}),L.Edit=L.Edit||{},L.Edit.Marker=L.Handler.extend({initialize:function(t,e){this._marker=t,L.setOptions(this,e)},addHooks:function(){var t=this._marker;t.dragging.enable(),t.on(&quot;dragend&quot;,this._onDragEnd,t),this._toggleMarkerHighlight()},removeHooks:function(){var t=this._marker;t.dragging.disable(),t.off(&quot;dragend&quot;,this._onDragEnd,t),this._toggleMarkerHighlight()},_onDragEnd:function(t){var e=t.target;e.edited=!0,this._map.fire(&quot;draw:editmove&quot;,{layer:e})},_toggleMarkerHighlight:function(){var t=this._marker._icon;t&amp;&amp;(t.style.display=&quot;none&quot;,L.DomUtil.hasClass(t,&quot;leaflet-edit-marker-selected&quot;)?(L.DomUtil.removeClass(t,&quot;leaflet-edit-marker-selected&quot;),this._offsetMarker(t,-4)):(L.DomUtil.addClass(t,&quot;leaflet-edit-marker-selected&quot;),this._offsetMarker(t,4)),t.style.display=&quot;&quot;)},_offsetMarker:function(t,e){var i=parseInt(t.style.marginTop,10)-e,o=parseInt(t.style.marginLeft,10)-e;t.style.marginTop=i+&quot;px&quot;,t.style.marginLeft=o+&quot;px&quot;}}),L.Marker.addInitHook(function(){L.Edit.Marker&amp;&amp;(this.editing=new L.Edit.Marker(this),this.options.editable&amp;&amp;this.editing.enable())}),L.Edit=L.Edit||{},L.Edit.Poly=L.Handler.extend({options:{},initialize:function(t,e){this.latlngs=[t._latlngs],t._holes&amp;&amp;(this.latlngs=this.latlngs.concat(t._holes)),this._poly=t,L.setOptions(this,e),this._poly.on(&quot;revert-edited&quot;,this._updateLatLngs,this)},_eachVertexHandler:function(t){for(var e=0;e&lt;this._verticesHandlers.length;e++)t(this._verticesHandlers[e])},addHooks:function(){this._initHandlers(),this._eachVertexHandler(function(t){t.addHooks()})},removeHooks:function(){this._eachVertexHandler(function(t){t.removeHooks()})},updateMarkers:function(){this._eachVertexHandler(function(t){t.updateMarkers()})},_initHandlers:function(){this._verticesHandlers=[];for(var t=0;t&lt;this.latlngs.length;t++)this._verticesHandlers.push(new L.Edit.PolyVerticesEdit(this._poly,this.latlngs[t],this.options))},_updateLatLngs:function(t){this.latlngs=[t.layer._latlngs],t.layer._holes&amp;&amp;(this.latlngs=this.latlngs.concat(t.layer._holes))}}),L.Edit.PolyVerticesEdit=L.Handler.extend({options:{icon:new L.DivIcon({iconSize:new L.Point(8,8),className:&quot;leaflet-div-icon leaflet-editing-icon&quot;}),touchIcon:new L.DivIcon({iconSize:new L.Point(20,20),className:&quot;leaflet-div-icon leaflet-editing-icon leaflet-touch-icon&quot;}),drawError:{color:&quot;#b00b00&quot;,timeout:1e3}},initialize:function(t,e,i){L.Browser.touch&amp;&amp;(this.options.icon=this.options.touchIcon),this._poly=t,i&amp;&amp;i.drawError&amp;&amp;(i.drawError=L.Util.extend({},this.options.drawError,i.drawError)),this._latlngs=e,L.setOptions(this,i)},addHooks:function(){var t=this._poly;t instanceof L.Polygon||(t.options.fill=!1),t.setStyle(t.options.editing),this._poly._map&amp;&amp;(this._map=this._poly._map,this._markerGroup||this._initMarkers(),this._poly._map.addLayer(this._markerGroup))},removeHooks:function(){var t=this._poly;t.setStyle(t.options.original),t._map&amp;&amp;(t._map.removeLayer(this._markerGroup),delete this._markerGroup,delete this._markers)},updateMarkers:function(){this._markerGroup.clearLayers(),this._initMarkers()},_initMarkers:function(){this._markerGroup||(this._markerGroup=new L.LayerGroup),this._markers=[];var t,e,i,o,n=this._latlngs;for(t=0,i=n.length;i&gt;t;t++)o=this._createMarker(n[t],t),o.on(&quot;click&quot;,this._onMarkerClick,this),this._markers.push(o);var s,a;for(t=0,e=i-1;i&gt;t;e=t++)(0!==t||L.Polygon&amp;&amp;this._poly instanceof L.Polygon)&amp;&amp;(s=this._markers[e],a=this._markers[t],this._createMiddleMarker(s,a),this._updatePrevNext(s,a))},_createMarker:function(t,e){var i=new L.Marker.Touch(t,{draggable:!0,icon:this.options.icon});return i._origLatLng=t,i._index=e,i.on(&quot;dragstart&quot;,this._onMarkerDragStart,this).on(&quot;drag&quot;,this._onMarkerDrag,this).on(&quot;dragend&quot;,this._fireEdit,this).on(&quot;touchmove&quot;,this._onTouchMove,this).on(&quot;MSPointerMove&quot;,this._onTouchMove,this).on(&quot;touchend&quot;,this._fireEdit,this).on(&quot;MSPointerUp&quot;,this._fireEdit,this),this._markerGroup.addLayer(i),i},_onMarkerDragStart:function(){this._poly.fire(&quot;editstart&quot;)},_spliceLatLngs:function(){var t=[].splice.apply(this._latlngs,arguments);return this._poly._convertLatLngs(this._latlngs,!0),this._poly.redraw(),t},_removeMarker:function(t){var e=t._index;this._markerGroup.removeLayer(t),this._markers.splice(e,1),this._spliceLatLngs(e,1),this._updateIndexes(e,-1),t.off(&quot;dragstart&quot;,this._onMarkerDragStart,this).off(&quot;drag&quot;,this._onMarkerDrag,this).off(&quot;dragend&quot;,this._fireEdit,this).off(&quot;touchmove&quot;,this._onMarkerDrag,this).off(&quot;touchend&quot;,this._fireEdit,this).off(&quot;click&quot;,this._onMarkerClick,this).off(&quot;MSPointerMove&quot;,this._onTouchMove,this).off(&quot;MSPointerUp&quot;,this._fireEdit,this)},_fireEdit:function(){this._poly.edited=!0,this._poly.fire(&quot;edit&quot;),this._poly._map.fire(&quot;draw:editvertex&quot;,{layers:this._markerGroup})},_onMarkerDrag:function(t){var e=t.target,i=this._poly;if(L.extend(e._origLatLng,e._latlng),e._middleLeft&amp;&amp;e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev,e)),e._middleRight&amp;&amp;e._middleRight.setLatLng(this._getMiddleLatLng(e,e._next)),i.options.poly){var o=i._map._editTooltip;if(!i.options.poly.allowIntersection&amp;&amp;i.intersects()){var n=i.options.color;i.setStyle({color:this.options.drawError.color}),o&amp;&amp;o.updateContent({text:L.drawLocal.draw.handlers.polyline.error}),setTimeout(function(){i.setStyle({color:n}),o&amp;&amp;o.updateContent({text:L.drawLocal.edit.handlers.edit.tooltip.text,subtext:L.drawLocal.edit.handlers.edit.tooltip.subtext})},1e3),this._onMarkerClick(t)}}this._poly.redraw(),this._poly.fire(&quot;editdrag&quot;)},_onMarkerClick:function(t){var e=L.Polygon&amp;&amp;this._poly instanceof L.Polygon?4:3,i=t.target;this._latlngs.length&lt;e||(this._removeMarker(i),this._updatePrevNext(i._prev,i._next),i._middleLeft&amp;&amp;this._markerGroup.removeLayer(i._middleLeft),i._middleRight&amp;&amp;this._markerGroup.removeLayer(i._middleRight),i._prev&amp;&amp;i._next?this._createMiddleMarker(i._prev,i._next):i._prev?i._next||(i._prev._middleRight=null):i._next._middleLeft=null,this._fireEdit())},_onTouchMove:function(t){var e=this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),i=this._map.layerPointToLatLng(e),o=t.target;L.extend(o._origLatLng,i),o._middleLeft&amp;&amp;o._middleLeft.setLatLng(this._getMiddleLatLng(o._prev,o)),o._middleRight&amp;&amp;o._middleRight.setLatLng(this._getMiddleLatLng(o,o._next)),this._poly.redraw(),this.updateMarkers()},_updateIndexes:function(t,e){this._markerGroup.eachLayer(function(i){i._index&gt;t&amp;&amp;(i._index+=e)})},_createMiddleMarker:function(t,e){var i,o,n,s=this._getMiddleLatLng(t,e),a=this._createMarker(s);a.setOpacity(.6),t._middleRight=e._middleLeft=a,o=function(){a.off(&quot;touchmove&quot;,o,this);var n=e._index;a._index=n,a.off(&quot;click&quot;,i,this).on(&quot;click&quot;,this._onMarkerClick,this),s.lat=a.getLatLng().lat,s.lng=a.getLatLng().lng,this._spliceLatLngs(n,0,s),this._markers.splice(n,0,a),a.setOpacity(1),this._updateIndexes(n,1),e._index++,this._updatePrevNext(t,a),this._updatePrevNext(a,e),this._poly.fire(&quot;editstart&quot;)},n=function(){a.off(&quot;dragstart&quot;,o,this),a.off(&quot;dragend&quot;,n,this),a.off(&quot;touchmove&quot;,o,this),this._createMiddleMarker(t,a),this._createMiddleMarker(a,e)},i=function(){o.call(this),n.call(this),this._fireEdit()},a.on(&quot;click&quot;,i,this).on(&quot;dragstart&quot;,o,this).on(&quot;dragend&quot;,n,this).on(&quot;touchmove&quot;,o,this),this._markerGroup.addLayer(a)},_updatePrevNext:function(t,e){t&amp;&amp;(t._next=e),e&amp;&amp;(e._prev=t)},_getMiddleLatLng:function(t,e){var i=this._poly._map,o=i.project(t.getLatLng()),n=i.project(e.getLatLng());return i.unproject(o._add(n)._divideBy(2))}}),L.Polyline.addInitHook(function(){this.editing||(L.Edit.Poly&amp;&amp;(this.editing=new L.Edit.Poly(this,this.options.poly),this.options.editable&amp;&amp;this.editing.enable()),this.on(&quot;add&quot;,function(){this.editing&amp;&amp;this.editing.enabled()&amp;&amp;this.editing.addHooks()}),this.on(&quot;remove&quot;,function(){this.editing&amp;&amp;this.editing.enabled()&amp;&amp;this.editing.removeHooks()}))}),L.Edit=L.Edit||{},L.Edit.SimpleShape=L.Handler.extend({options:{moveIcon:new L.DivIcon({iconSize:new L.Point(8,8),className:&quot;leaflet-div-icon leaflet-editing-icon leaflet-edit-move&quot;}),resizeIcon:new L.DivIcon({iconSize:new L.Point(8,8),className:&quot;leaflet-div-icon leaflet-editing-icon leaflet-edit-resize&quot;}),touchMoveIcon:new L.DivIcon({iconSize:new L.Point(20,20),className:&quot;leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon&quot;}),touchResizeIcon:new L.DivIcon({iconSize:new L.Point(20,20),className:&quot;leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon&quot;})},initialize:function(t,e){L.Browser.touch&amp;&amp;(this.options.moveIcon=this.options.touchMoveIcon,this.options.resizeIcon=this.options.touchResizeIcon),this._shape=t,L.Util.setOptions(this,e)},addHooks:function(){var t=this._shape;this._shape._map&amp;&amp;(this._map=this._shape._map,t.setStyle(t.options.editing),t._map&amp;&amp;(this._map=t._map,this._markerGroup||this._initMarkers(),this._map.addLayer(this._markerGroup)))},removeHooks:function(){var t=this._shape;if(t.setStyle(t.options.original),t._map){this._unbindMarker(this._moveMarker);for(var e=0,i=this._resizeMarkers.length;i&gt;e;e++)this._unbindMarker(this._resizeMarkers[e]);this._resizeMarkers=null,this._map.removeLayer(this._markerGroup),delete this._markerGroup}this._map=null},updateMarkers:function(){this._markerGroup.clearLayers(),this._initMarkers()},_initMarkers:function(){this._markerGroup||(this._markerGroup=new L.LayerGroup),this._createMoveMarker(),this._createResizeMarker()},_createMoveMarker:function(){},_createResizeMarker:function(){},_createMarker:function(t,e){var i=new L.Marker.Touch(t,{draggable:!0,icon:e,zIndexOffset:10});return this._bindMarker(i),this._markerGroup.addLayer(i),i},_bindMarker:function(t){t.on(&quot;dragstart&quot;,this._onMarkerDragStart,this).on(&quot;drag&quot;,this._onMarkerDrag,this).on(&quot;dragend&quot;,this._onMarkerDragEnd,this).on(&quot;touchstart&quot;,this._onTouchStart,this).on(&quot;touchmove&quot;,this._onTouchMove,this).on(&quot;MSPointerMove&quot;,this._onTouchMove,this).on(&quot;touchend&quot;,this._onTouchEnd,this).on(&quot;MSPointerUp&quot;,this._onTouchEnd,this)},_unbindMarker:function(t){t.off(&quot;dragstart&quot;,this._onMarkerDragStart,this).off(&quot;drag&quot;,this._onMarkerDrag,this).off(&quot;dragend&quot;,this._onMarkerDragEnd,this).off(&quot;touchstart&quot;,this._onTouchStart,this).off(&quot;touchmove&quot;,this._onTouchMove,this).off(&quot;MSPointerMove&quot;,this._onTouchMove,this).off(&quot;touchend&quot;,this._onTouchEnd,this).off(&quot;MSPointerUp&quot;,this._onTouchEnd,this)},_onMarkerDragStart:function(t){var e=t.target;e.setOpacity(0),this._shape.fire(&quot;editstart&quot;)},_fireEdit:function(){this._shape.edited=!0,this._shape.fire(&quot;edit&quot;)},_onMarkerDrag:function(t){var e=t.target,i=e.getLatLng();e===this._moveMarker?this._move(i):this._resize(i),this._shape.redraw(),this._shape.fire(&quot;editdrag&quot;)},_onMarkerDragEnd:function(t){var e=t.target;e.setOpacity(1),this._fireEdit()},_onTouchStart:function(t){if(L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this,t),&quot;function&quot;==typeof this._getCorners){var e=this._getCorners(),i=t.target,o=i._cornerIndex;i.setOpacity(0),this._oppositeCorner=e[(o+2)%4],this._toggleCornerMarkers(0,o)}this._shape.fire(&quot;editstart&quot;)},_onTouchMove:function(t){var e=this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),i=this._map.layerPointToLatLng(e),o=t.target;return o===this._moveMarker?this._move(i):this._resize(i),this._shape.redraw(),!1},_onTouchEnd:function(t){var e=t.target;e.setOpacity(1),this.updateMarkers(),this._fireEdit()},_move:function(){},_resize:function(){}}),L.Edit=L.Edit||{},L.Edit.Rectangle=L.Edit.SimpleShape.extend({_createMoveMarker:function(){var t=this._shape.getBounds(),e=t.getCenter();this._moveMarker=this._createMarker(e,this.options.moveIcon)},_createResizeMarker:function(){var t=this._getCorners();this._resizeMarkers=[];for(var e=0,i=t.length;i&gt;e;e++)this._resizeMarkers.push(this._createMarker(t[e],this.options.resizeIcon)),this._resizeMarkers[e]._cornerIndex=e},_onMarkerDragStart:function(t){L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this,t);var e=this._getCorners(),i=t.target,o=i._cornerIndex;this._oppositeCorner=e[(o+2)%4],this._toggleCornerMarkers(0,o)},_onMarkerDragEnd:function(t){var e,i,o=t.target;o===this._moveMarker&amp;&amp;(e=this._shape.getBounds(),i=e.getCenter(),o.setLatLng(i)),this._toggleCornerMarkers(1),this._repositionCornerMarkers(),L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this,t)},_move:function(t){for(var e,i=this._shape.getLatLngs(),o=this._shape.getBounds(),n=o.getCenter(),s=[],a=0,r=i.length;r&gt;a;a++)e=[i[a].lat-n.lat,i[a].lng-n.lng],s.push([t.lat+e[0],t.lng+e[1]]);this._shape.setLatLngs(s),this._repositionCornerMarkers(),this._map.fire(&quot;draw:editmove&quot;,{layer:this._shape})},_resize:function(t){var e;this._shape.setBounds(L.latLngBounds(t,this._oppositeCorner)),e=this._shape.getBounds(),this._moveMarker.setLatLng(e.getCenter()),this._map.fire(&quot;draw:editresize&quot;,{layer:this._shape})},_getCorners:function(){var t=this._shape.getBounds(),e=t.getNorthWest(),i=t.getNorthEast(),o=t.getSouthEast(),n=t.getSouthWest();return[e,i,o,n]},_toggleCornerMarkers:function(t){for(var e=0,i=this._resizeMarkers.length;i&gt;e;e++)this._resizeMarkers[e].setOpacity(t)},_repositionCornerMarkers:function(){for(var t=this._getCorners(),e=0,i=this._resizeMarkers.length;i&gt;e;e++)this._resizeMarkers[e].setLatLng(t[e])}}),L.Rectangle.addInitHook(function(){L.Edit.Rectangle&amp;&amp;(this.editing=new L.Edit.Rectangle(this),this.options.editable&amp;&amp;this.editing.enable())}),L.Edit=L.Edit||{},L.Edit.Circle=L.Edit.SimpleShape.extend({_createMoveMarker:function(){var t=this._shape.getLatLng();this._moveMarker=this._createMarker(t,this.options.moveIcon)},_createResizeMarker:function(){var t=this._shape.getLatLng(),e=this._getResizeMarkerPoint(t);this._resizeMarkers=[],this._resizeMarkers.push(this._createMarker(e,this.options.resizeIcon))},_getResizeMarkerPoint:function(t){var e=this._shape._radius*Math.cos(Math.PI/4),i=this._map.project(t);return this._map.unproject([i.x+e,i.y-e])},_move:function(t){var e=this._getResizeMarkerPoint(t);this._resizeMarkers[0].setLatLng(e),this._shape.setLatLng(t),this._map.fire(&quot;draw:editmove&quot;,{layer:this._shape})},_resize:function(t){</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">var e=this._moveMarker.getLatLng(),i=e.distanceTo(t);this._shape.setRadius(i),this._map.fire(&quot;draw:editresize&quot;,{layer:this._shape})}}),L.Circle.addInitHook(function(){L.Edit.Circle&amp;&amp;(this.editing=new L.Edit.Circle(this),this.options.editable&amp;&amp;this.editing.enable()),this.on(&quot;add&quot;,function(){this.editing&amp;&amp;this.editing.enabled()&amp;&amp;this.editing.addHooks()}),this.on(&quot;remove&quot;,function(){this.editing&amp;&amp;this.editing.enabled()&amp;&amp;this.editing.removeHooks()})}),L.Map.mergeOptions({touchExtend:!0}),L.Map.TouchExtend=L.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane},addHooks:function(){L.DomEvent.on(this._container,&quot;touchstart&quot;,this._onTouchStart,this),L.DomEvent.on(this._container,&quot;touchend&quot;,this._onTouchEnd,this),L.DomEvent.on(this._container,&quot;touchmove&quot;,this._onTouchMove,this),this._detectIE()?(L.DomEvent.on(this._container,&quot;MSPointerDown&quot;,this._onTouchStart,this),L.DomEvent.on(this._container,&quot;MSPointerUp&quot;,this._onTouchEnd,this),L.DomEvent.on(this._container,&quot;MSPointerMove&quot;,this._onTouchMove,this),L.DomEvent.on(this._container,&quot;MSPointerCancel&quot;,this._onTouchCancel,this)):(L.DomEvent.on(this._container,&quot;touchcancel&quot;,this._onTouchCancel,this),L.DomEvent.on(this._container,&quot;touchleave&quot;,this._onTouchLeave,this))},removeHooks:function(){L.DomEvent.off(this._container,&quot;touchstart&quot;,this._onTouchStart),L.DomEvent.off(this._container,&quot;touchend&quot;,this._onTouchEnd),L.DomEvent.off(this._container,&quot;touchmove&quot;,this._onTouchMove),this._detectIE()?(L.DomEvent.off(this._container,&quot;MSPointerDowm&quot;,this._onTouchStart),L.DomEvent.off(this._container,&quot;MSPointerUp&quot;,this._onTouchEnd),L.DomEvent.off(this._container,&quot;MSPointerMove&quot;,this._onTouchMove),L.DomEvent.off(this._container,&quot;MSPointerCancel&quot;,this._onTouchCancel)):(L.DomEvent.off(this._container,&quot;touchcancel&quot;,this._onTouchCancel),L.DomEvent.off(this._container,&quot;touchleave&quot;,this._onTouchLeave))},_touchEvent:function(t,e){var i={};if(&quot;undefined&quot;!=typeof t.touches){if(!t.touches.length)return;i=t.touches[0]}else{if(&quot;touch&quot;!==t.pointerType)return;if(i=t,!this._filterClick(t))return}var o=this._map.mouseEventToContainerPoint(i),n=this._map.mouseEventToLayerPoint(i),s=this._map.layerPointToLatLng(n);this._map.fire(e,{latlng:s,layerPoint:n,containerPoint:o,pageX:i.pageX,pageY:i.pageY,originalEvent:t})},_filterClick:function(t){var e=t.timeStamp||t.originalEvent.timeStamp,i=L.DomEvent._lastClick&amp;&amp;e-L.DomEvent._lastClick;return i&amp;&amp;i&gt;100&amp;&amp;500&gt;i||t.target._simulatedClick&amp;&amp;!t._simulated?(L.DomEvent.stop(t),!1):(L.DomEvent._lastClick=e,!0)},_onTouchStart:function(t){if(this._map._loaded){var e=&quot;touchstart&quot;;this._touchEvent(t,e)}},_onTouchEnd:function(t){if(this._map._loaded){var e=&quot;touchend&quot;;this._touchEvent(t,e)}},_onTouchCancel:function(t){if(this._map._loaded){var e=&quot;touchcancel&quot;;this._detectIE()&amp;&amp;(e=&quot;pointercancel&quot;),this._touchEvent(t,e)}},_onTouchLeave:function(t){if(this._map._loaded){var e=&quot;touchleave&quot;;this._touchEvent(t,e)}},_onTouchMove:function(t){if(this._map._loaded){var e=&quot;touchmove&quot;;this._touchEvent(t,e)}},_detectIE:function(){var e=t.navigator.userAgent,i=e.indexOf(&quot;MSIE &quot;);if(i&gt;0)return parseInt(e.substring(i+5,e.indexOf(&quot;.&quot;,i)),10);var o=e.indexOf(&quot;Trident/&quot;);if(o&gt;0){var n=e.indexOf(&quot;rv:&quot;);return parseInt(e.substring(n+3,e.indexOf(&quot;.&quot;,n)),10)}var s=e.indexOf(&quot;Edge/&quot;);return s&gt;0?parseInt(e.substring(s+5,e.indexOf(&quot;.&quot;,s)),10):!1}}),L.Map.addInitHook(&quot;addHandler&quot;,&quot;touchExtend&quot;,L.Map.TouchExtend),L.Marker.Touch=L.Marker.extend({_initInteraction:function(){if(this.options.clickable){var t=this._icon,e=[&quot;dblclick&quot;,&quot;mousedown&quot;,&quot;mouseover&quot;,&quot;mouseout&quot;,&quot;contextmenu&quot;,&quot;touchstart&quot;,&quot;touchend&quot;,&quot;touchmove&quot;];this._detectIE?e.concat([&quot;MSPointerDown&quot;,&quot;MSPointerUp&quot;,&quot;MSPointerMove&quot;,&quot;MSPointerCancel&quot;]):e.concat([&quot;touchcancel&quot;]),L.DomUtil.addClass(t,&quot;leaflet-clickable&quot;),L.DomEvent.on(t,&quot;click&quot;,this._onMouseClick,this),L.DomEvent.on(t,&quot;keypress&quot;,this._onKeyPress,this);for(var i=0;i&lt;e.length;i++)L.DomEvent.on(t,e[i],this._fireMouseEvent,this);L.Handler.MarkerDrag&amp;&amp;(this.dragging=new L.Handler.MarkerDrag(this),this.options.draggable&amp;&amp;this.dragging.enable())}},_detectIE:function(){var e=t.navigator.userAgent,i=e.indexOf(&quot;MSIE &quot;);if(i&gt;0)return parseInt(e.substring(i+5,e.indexOf(&quot;.&quot;,i)),10);var o=e.indexOf(&quot;Trident/&quot;);if(o&gt;0){var n=e.indexOf(&quot;rv:&quot;);return parseInt(e.substring(n+3,e.indexOf(&quot;.&quot;,n)),10)}var s=e.indexOf(&quot;Edge/&quot;);return s&gt;0?parseInt(e.substring(s+5,e.indexOf(&quot;.&quot;,s)),10):!1}}),L.LatLngUtil={cloneLatLngs:function(t){for(var e=[],i=0,o=t.length;o&gt;i;i++)e.push(this.cloneLatLng(t[i]));return e},cloneLatLng:function(t){return L.latLng(t.lat,t.lng)}},L.GeometryUtil=L.extend(L.GeometryUtil||{},{geodesicArea:function(t){var e,i,o=t.length,n=0,s=L.LatLng.DEG_TO_RAD;if(o&gt;2){for(var a=0;o&gt;a;a++)e=t[a],i=t[(a+1)%o],n+=(i.lng-e.lng)*s*(2+Math.sin(e.lat*s)+Math.sin(i.lat*s));n=6378137*n*6378137/2}return Math.abs(n)},readableArea:function(t,e){var i;return e?i=t&gt;=1e4?(1e-4*t).toFixed(2)+&quot; ha&quot;:t.toFixed(2)+&quot; m&amp;sup2;&quot;:(t/=.836127,i=t&gt;=3097600?(t/3097600).toFixed(2)+&quot; mi&amp;sup2;&quot;:t&gt;=4840?(t/4840).toFixed(2)+&quot; acres&quot;:Math.ceil(t)+&quot; yd&amp;sup2;&quot;),i},readableDistance:function(t,e,i){var o;if(e)o=t&gt;1e3?(t/1e3).toFixed(2)+&quot; km&quot;:Math.ceil(t)+&quot; m&quot;;else if(t*=1.09361,t&gt;1760)o=(t/1760).toFixed(2)+&quot; miles&quot;;else{var n=&quot; yd&quot;;i&amp;&amp;(t=3*t,n=&quot; ft&quot;),o=Math.ceil(t)+n}return o}}),L.Util.extend(L.LineUtil,{segmentsIntersect:function(t,e,i,o){return this._checkCounterclockwise(t,i,o)!==this._checkCounterclockwise(e,i,o)&amp;&amp;this._checkCounterclockwise(t,e,i)!==this._checkCounterclockwise(t,e,o)},_checkCounterclockwise:function(t,e,i){return(i.y-t.y)*(e.x-t.x)&gt;(e.y-t.y)*(i.x-t.x)}}),L.Polyline.include({intersects:function(){var t,e,i,o=this._originalPoints,n=o?o.length:0;if(this._tooFewPointsForIntersection())return!1;for(t=n-1;t&gt;=3;t--)if(e=o[t-1],i=o[t],this._lineSegmentsIntersectsRange(e,i,t-2))return!0;return!1},newLatLngIntersects:function(t,e){return this._map?this.newPointIntersects(this._map.latLngToLayerPoint(t),e):!1},newPointIntersects:function(t,e){var i=this._originalPoints,o=i?i.length:0,n=i?i[o-1]:null,s=o-2;return this._tooFewPointsForIntersection(1)?!1:this._lineSegmentsIntersectsRange(n,t,s,e?1:0)},_tooFewPointsForIntersection:function(t){var e=this._originalPoints,i=e?e.length:0;return i+=t||0,!this._originalPoints||3&gt;=i},_lineSegmentsIntersectsRange:function(t,e,i,o){var n,s,a=this._originalPoints;o=o||0;for(var r=i;r&gt;o;r--)if(n=a[r-1],s=a[r],L.LineUtil.segmentsIntersect(t,e,n,s))return!0;return!1}}),L.Polygon.include({intersects:function(){var t,e,i,o,n,s=this._originalPoints;return this._tooFewPointsForIntersection()?!1:(t=L.Polyline.prototype.intersects.call(this))?!0:(e=s.length,i=s[0],o=s[e-1],n=e-2,this._lineSegmentsIntersectsRange(o,i,n,1))}}),L.Control.Draw=L.Control.extend({options:{position:&quot;topleft&quot;,draw:{},edit:!1},initialize:function(t){if(L.version&lt;&quot;0.7&quot;)throw new Error(&quot;Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/&quot;);L.Control.prototype.initialize.call(this,t);var e;this._toolbars={},L.DrawToolbar&amp;&amp;this.options.draw&amp;&amp;(e=new L.DrawToolbar(this.options.draw),this._toolbars[L.DrawToolbar.TYPE]=e,this._toolbars[L.DrawToolbar.TYPE].on(&quot;enable&quot;,this._toolbarEnabled,this)),L.EditToolbar&amp;&amp;this.options.edit&amp;&amp;(e=new L.EditToolbar(this.options.edit),this._toolbars[L.EditToolbar.TYPE]=e,this._toolbars[L.EditToolbar.TYPE].on(&quot;enable&quot;,this._toolbarEnabled,this)),L.toolbar=this},onAdd:function(t){var e,i=L.DomUtil.create(&quot;div&quot;,&quot;leaflet-draw&quot;),o=!1,n=&quot;leaflet-draw-toolbar-top&quot;;for(var s in this._toolbars)this._toolbars.hasOwnProperty(s)&amp;&amp;(e=this._toolbars[s].addToolbar(t),e&amp;&amp;(o||(L.DomUtil.hasClass(e,n)||L.DomUtil.addClass(e.childNodes[0],n),o=!0),i.appendChild(e)));return i},onRemove:function(){for(var t in this._toolbars)this._toolbars.hasOwnProperty(t)&amp;&amp;this._toolbars[t].removeToolbar()},setDrawingOptions:function(t){for(var e in this._toolbars)this._toolbars[e]instanceof L.DrawToolbar&amp;&amp;this._toolbars[e].setOptions(t)},_toolbarEnabled:function(t){var e=t.target;for(var i in this._toolbars)this._toolbars[i]!==e&amp;&amp;this._toolbars[i].disable()}}),L.Map.mergeOptions({drawControlTooltips:!0,drawControl:!1}),L.Map.addInitHook(function(){this.options.drawControl&amp;&amp;(this.drawControl=new L.Control.Draw,this.addControl(this.drawControl))}),L.Toolbar=L.Class.extend({includes:[L.Mixin.Events],initialize:function(t){L.setOptions(this,t),this._modes={},this._actionButtons=[],this._activeMode=null},enabled:function(){return null!==this._activeMode},disable:function(){this.enabled()&amp;&amp;this._activeMode.handler.disable()},addToolbar:function(t){var e,i=L.DomUtil.create(&quot;div&quot;,&quot;leaflet-draw-section&quot;),o=0,n=this._toolbarClass||&quot;&quot;,s=this.getModeHandlers(t);for(this._toolbarContainer=L.DomUtil.create(&quot;div&quot;,&quot;leaflet-draw-toolbar leaflet-bar&quot;),this._map=t,e=0;e&lt;s.length;e++)s[e].enabled&amp;&amp;this._initModeHandler(s[e].handler,this._toolbarContainer,o++,n,s[e].title);return o?(this._lastButtonIndex=--o,this._actionsContainer=L.DomUtil.create(&quot;ul&quot;,&quot;leaflet-draw-actions&quot;),i.appendChild(this._toolbarContainer),i.appendChild(this._actionsContainer),i):void 0},removeToolbar:function(){for(var t in this._modes)this._modes.hasOwnProperty(t)&amp;&amp;(this._disposeButton(this._modes[t].button,this._modes[t].handler.enable,this._modes[t].handler),this._modes[t].handler.disable(),this._modes[t].handler.off(&quot;enabled&quot;,this._handlerActivated,this).off(&quot;disabled&quot;,this._handlerDeactivated,this));this._modes={};for(var e=0,i=this._actionButtons.length;i&gt;e;e++)this._disposeButton(this._actionButtons[e].button,this._actionButtons[e].callback,this);this._actionButtons=[],this._actionsContainer=null},_initModeHandler:function(t,e,i,o,n){var s=t.type;this._modes[s]={},this._modes[s].handler=t,this._modes[s].button=this._createButton({type:s,title:n,className:o+&quot;-&quot;+s,container:e,callback:this._modes[s].handler.enable,context:this._modes[s].handler}),this._modes[s].buttonIndex=i,this._modes[s].handler.on(&quot;enabled&quot;,this._handlerActivated,this).on(&quot;disabled&quot;,this._handlerDeactivated,this)},_createButton:function(t){var e=L.DomUtil.create(&quot;a&quot;,t.className||&quot;&quot;,t.container);return e.href=&quot;#&quot;,t.text&amp;&amp;(e.innerHTML=t.text),t.title&amp;&amp;(e.title=t.title),L.DomEvent.on(e,&quot;click&quot;,L.DomEvent.stopPropagation).on(e,&quot;mousedown&quot;,L.DomEvent.stopPropagation).on(e,&quot;dblclick&quot;,L.DomEvent.stopPropagation).on(e,&quot;click&quot;,L.DomEvent.preventDefault).on(e,&quot;click&quot;,t.callback,t.context),e},_disposeButton:function(t,e){L.DomEvent.off(t,&quot;click&quot;,L.DomEvent.stopPropagation).off(t,&quot;mousedown&quot;,L.DomEvent.stopPropagation).off(t,&quot;dblclick&quot;,L.DomEvent.stopPropagation).off(t,&quot;click&quot;,L.DomEvent.preventDefault).off(t,&quot;click&quot;,e)},_handlerActivated:function(t){this.disable(),this._activeMode=this._modes[t.handler],L.DomUtil.addClass(this._activeMode.button,&quot;leaflet-draw-toolbar-button-enabled&quot;),this._showActionsToolbar(),this.fire(&quot;enable&quot;)},_handlerDeactivated:function(){this._hideActionsToolbar(),L.DomUtil.removeClass(this._activeMode.button,&quot;leaflet-draw-toolbar-button-enabled&quot;),this._activeMode=null,this.fire(&quot;disable&quot;)},_createActions:function(t){var e,i,o,n,s=this._actionsContainer,a=this.getActions(t),r=a.length;for(i=0,o=this._actionButtons.length;o&gt;i;i++)this._disposeButton(this._actionButtons[i].button,this._actionButtons[i].callback);for(this._actionButtons=[];s.firstChild;)s.removeChild(s.firstChild);for(var h=0;r&gt;h;h++)&quot;enabled&quot;in a[h]&amp;&amp;!a[h].enabled||(e=L.DomUtil.create(&quot;li&quot;,&quot;&quot;,s),n=this._createButton({title:a[h].title,text:a[h].text,container:e,callback:a[h].callback,context:a[h].context}),this._actionButtons.push({button:n,callback:a[h].callback}))},_showActionsToolbar:function(){var t=this._activeMode.buttonIndex,e=this._lastButtonIndex,i=this._activeMode.button.offsetTop-1;this._createActions(this._activeMode.handler),this._actionsContainer.style.top=i+&quot;px&quot;,0===t&amp;&amp;(L.DomUtil.addClass(this._toolbarContainer,&quot;leaflet-draw-toolbar-notop&quot;),L.DomUtil.addClass(this._actionsContainer,&quot;leaflet-draw-actions-top&quot;)),t===e&amp;&amp;(L.DomUtil.addClass(this._toolbarContainer,&quot;leaflet-draw-toolbar-nobottom&quot;),L.DomUtil.addClass(this._actionsContainer,&quot;leaflet-draw-actions-bottom&quot;)),this._actionsContainer.style.display=&quot;block&quot;},_hideActionsToolbar:function(){this._actionsContainer.style.display=&quot;none&quot;,L.DomUtil.removeClass(this._toolbarContainer,&quot;leaflet-draw-toolbar-notop&quot;),L.DomUtil.removeClass(this._toolbarContainer,&quot;leaflet-draw-toolbar-nobottom&quot;),L.DomUtil.removeClass(this._actionsContainer,&quot;leaflet-draw-actions-top&quot;),L.DomUtil.removeClass(this._actionsContainer,&quot;leaflet-draw-actions-bottom&quot;)}}),L.Tooltip=L.Class.extend({initialize:function(t){this._map=t,this._popupPane=t._panes.popupPane,this._container=t.options.drawControlTooltips?L.DomUtil.create(&quot;div&quot;,&quot;leaflet-draw-tooltip&quot;,this._popupPane):null,this._singleLineLabel=!1,this._map.on(&quot;mouseout&quot;,this._onMouseOut,this)},dispose:function(){this._map.off(&quot;mouseout&quot;,this._onMouseOut,this),this._container&amp;&amp;(this._popupPane.removeChild(this._container),this._container=null)},updateContent:function(t){return this._container?(t.subtext=t.subtext||&quot;&quot;,0!==t.subtext.length||this._singleLineLabel?t.subtext.length&gt;0&amp;&amp;this._singleLineLabel&amp;&amp;(L.DomUtil.removeClass(this._container,&quot;leaflet-draw-tooltip-single&quot;),this._singleLineLabel=!1):(L.DomUtil.addClass(this._container,&quot;leaflet-draw-tooltip-single&quot;),this._singleLineLabel=!0),this._container.innerHTML=(t.subtext.length&gt;0?&#39;&lt;span class=&quot;leaflet-draw-tooltip-subtext&quot;&gt;&#39;+t.subtext+&quot;&lt;/span&gt;&lt;br /&gt;&quot;:&quot;&quot;)+&quot;&lt;span&gt;&quot;+t.text+&quot;&lt;/span&gt;&quot;,this):this},updatePosition:function(t){var e=this._map.latLngToLayerPoint(t),i=this._container;return this._container&amp;&amp;(i.style.visibility=&quot;inherit&quot;,L.DomUtil.setPosition(i,e)),this},showAsError:function(){return this._container&amp;&amp;L.DomUtil.addClass(this._container,&quot;leaflet-error-draw-tooltip&quot;),this},removeError:function(){return this._container&amp;&amp;L.DomUtil.removeClass(this._container,&quot;leaflet-error-draw-tooltip&quot;),this},_onMouseOut:function(){this._container&amp;&amp;(this._container.style.visibility=&quot;hidden&quot;)}}),L.DrawToolbar=L.Toolbar.extend({statics:{TYPE:&quot;draw&quot;},options:{polyline:{},polygon:{},rectangle:{},circle:{},marker:{}},initialize:function(t){for(var e in this.options)this.options.hasOwnProperty(e)&amp;&amp;t[e]&amp;&amp;(t[e]=L.extend({},this.options[e],t[e]));this._toolbarClass=&quot;leaflet-draw-draw&quot;,L.Toolbar.prototype.initialize.call(this,t)},getModeHandlers:function(t){return[{enabled:this.options.polyline,handler:new L.Draw.Polyline(t,this.options.polyline),title:L.drawLocal.draw.toolbar.buttons.polyline},{enabled:this.options.polygon,handler:new L.Draw.Polygon(t,this.options.polygon),title:L.drawLocal.draw.toolbar.buttons.polygon},{enabled:this.options.rectangle,handler:new L.Draw.Rectangle(t,this.options.rectangle),title:L.drawLocal.draw.toolbar.buttons.rectangle},{enabled:this.options.circle,handler:new L.Draw.Circle(t,this.options.circle),title:L.drawLocal.draw.toolbar.buttons.circle},{enabled:this.options.marker,handler:new L.Draw.Marker(t,this.options.marker),title:L.drawLocal.draw.toolbar.buttons.marker}]},getActions:function(t){return[{enabled:t.completeShape,title:L.drawLocal.draw.toolbar.finish.title,text:L.drawLocal.draw.toolbar.finish.text,callback:t.completeShape,context:t},{enabled:t.deleteLastVertex,title:L.drawLocal.draw.toolbar.undo.title,text:L.drawLocal.draw.toolbar.undo.text,callback:t.deleteLastVertex,context:t},{title:L.drawLocal.draw.toolbar.actions.title,text:L.drawLocal.draw.toolbar.actions.text,callback:this.disable,context:this}]},setOptions:function(t){L.setOptions(this,t);for(var e in this._modes)this._modes.hasOwnProperty(e)&amp;&amp;t.hasOwnProperty(e)&amp;&amp;this._modes[e].handler.setOptions(t[e])}}),L.EditToolbar=L.Toolbar.extend({statics:{TYPE:&quot;edit&quot;},options:{edit:{selectedPathOptions:{dashArray:&quot;10, 10&quot;,fill:!0,fillColor:&quot;#fe57a1&quot;,fillOpacity:.1,maintainColor:!1}},remove:{},poly:null,featureGroup:null},initialize:function(t){t.edit&amp;&amp;(&quot;undefined&quot;==typeof t.edit.selectedPathOptions&amp;&amp;(t.edit.selectedPathOptions=this.options.edit.selectedPathOptions),t.edit.selectedPathOptions=L.extend({},this.options.edit.selectedPathOptions,t.edit.selectedPathOptions)),t.remove&amp;&amp;(t.remove=L.extend({},this.options.remove,t.remove)),t.poly&amp;&amp;(t.poly=L.extend({},this.options.poly,t.poly)),this._toolbarClass=&quot;leaflet-draw-edit&quot;,L.Toolbar.prototype.initialize.call(this,t),this._selectedFeatureCount=0},getModeHandlers:function(t){var e=this.options.featureGroup;return[{enabled:this.options.edit,handler:new L.EditToolbar.Edit(t,{featureGroup:e,selectedPathOptions:this.options.edit.selectedPathOptions,poly:this.options.poly}),title:L.drawLocal.edit.toolbar.buttons.edit},{enabled:this.options.remove,handler:new L.EditToolbar.Delete(t,{featureGroup:e}),title:L.drawLocal.edit.toolbar.buttons.remove}]},getActions:function(){return[{title:L.drawLocal.edit.toolbar.actions.save.title,text:L.drawLocal.edit.toolbar.actions.save.text,callback:this._save,context:this},{title:L.drawLocal.edit.toolbar.actions.cancel.title,text:L.drawLocal.edit.toolbar.actions.cancel.text,callback:this.disable,context:this}]},addToolbar:function(t){var e=L.Toolbar.prototype.addToolbar.call(this,t);return this._checkDisabled(),this.options.featureGroup.on(&quot;layeradd layerremove&quot;,this._checkDisabled,this),e},removeToolbar:function(){this.options.featureGroup.off(&quot;layeradd layerremove&quot;,this._checkDisabled,this),L.Toolbar.prototype.removeToolbar.call(this)},disable:function(){this.enabled()&amp;&amp;(this._activeMode.handler.revertLayers(),L.Toolbar.prototype.disable.call(this))},_save:function(){this._activeMode.handler.save(),this._activeMode&amp;&amp;this._activeMode.handler.disable()},_checkDisabled:function(){var t,e=this.options.featureGroup,i=0!==e.getLayers().length;this.options.edit&amp;&amp;(t=this._modes[L.EditToolbar.Edit.TYPE].button,i?L.DomUtil.removeClass(t,&quot;leaflet-disabled&quot;):L.DomUtil.addClass(t,&quot;leaflet-disabled&quot;),t.setAttribute(&quot;title&quot;,i?L.drawLocal.edit.toolbar.buttons.edit:L.drawLocal.edit.toolbar.buttons.editDisabled)),this.options.remove&amp;&amp;(t=this._modes[L.EditToolbar.Delete.TYPE].button,i?L.DomUtil.removeClass(t,&quot;leaflet-disabled&quot;):L.DomUtil.addClass(t,&quot;leaflet-disabled&quot;),t.setAttribute(&quot;title&quot;,i?L.drawLocal.edit.toolbar.buttons.remove:L.drawLocal.edit.toolbar.buttons.removeDisabled))}}),L.EditToolbar.Edit=L.Handler.extend({statics:{TYPE:&quot;edit&quot;},includes:L.Mixin.Events,initialize:function(t,e){if(L.Handler.prototype.initialize.call(this,t),L.setOptions(this,e),this._featureGroup=e.featureGroup,!(this._featureGroup instanceof L.FeatureGroup))throw new Error(&quot;options.featureGroup must be a L.FeatureGroup&quot;);this._uneditedLayerProps={},this.type=L.EditToolbar.Edit.TYPE},enable:function(){!this._enabled&amp;&amp;this._hasAvailableLayers()&amp;&amp;(this.fire(&quot;enabled&quot;,{handler:this.type}),this._map.fire(&quot;draw:editstart&quot;,{handler:this.type}),L.Handler.prototype.enable.call(this),this._featureGroup.on(&quot;layeradd&quot;,this._enableLayerEdit,this).on(&quot;layerremove&quot;,this._disableLayerEdit,this))},disable:function(){this._enabled&amp;&amp;(this._featureGroup.off(&quot;layeradd&quot;,this._enableLayerEdit,this).off(&quot;layerremove&quot;,this._disableLayerEdit,this),L.Handler.prototype.disable.call(this),this._map.fire(&quot;draw:editstop&quot;,{handler:this.type}),this.fire(&quot;disabled&quot;,{handler:this.type}))},addHooks:function(){var t=this._map;t&amp;&amp;(t.getContainer().focus(),this._featureGroup.eachLayer(this._enableLayerEdit,this),this._tooltip=new L.Tooltip(this._map),this._tooltip.updateContent({text:L.drawLocal.edit.handlers.edit.tooltip.text,subtext:L.drawLocal.edit.handlers.edit.tooltip.subtext}),t._editTooltip=this._tooltip,this._updateTooltip(),this._map.on(&quot;mousemove&quot;,this._onMouseMove,this).on(&quot;touchmove&quot;,this._onMouseMove,this).on(&quot;MSPointerMove&quot;,this._onMouseMove,this).on(&quot;click&quot;,this._editStyle,this).on(&quot;draw:editvertex&quot;,this._updateTooltip,this))},removeHooks:function(){this._map&amp;&amp;(this._featureGroup.eachLayer(this._disableLayerEdit,this),this._uneditedLayerProps={},this._tooltip.dispose(),this._tooltip=null,this._map.off(&quot;mousemove&quot;,this._onMouseMove,this).off(&quot;touchmove&quot;,this._onMouseMove,this).off(&quot;MSPointerMove&quot;,this._onMouseMove,this).off(&quot;click&quot;,this._editStyle,this).off(&quot;draw:editvertex&quot;,this._updateTooltip,this))},revertLayers:function(){this._featureGroup.eachLayer(function(t){this._revertLayer(t)},this)},save:function(){var t=new L.LayerGroup;this._featureGroup.eachLayer(function(e){e.edited&amp;&amp;(t.addLayer(e),e.edited=!1)}),this._map.fire(&quot;draw:edited&quot;,{layers:t})},_backupLayer:function(t){var e=L.Util.stamp(t);this._uneditedLayerProps[e]||(t instanceof L.Polyline||t instanceof L.Polygon||t instanceof L.Rectangle?this._uneditedLayerProps[e]={latlngs:L.LatLngUtil.cloneLatLngs(t.getLatLngs())}:t instanceof L.Circle?this._uneditedLayerProps[e]={latlng:L.LatLngUtil.cloneLatLng(t.getLatLng()),radius:t.getRadius()}:t instanceof L.Marker&amp;&amp;(this._uneditedLayerProps[e]={latlng:L.LatLngUtil.cloneLatLng(t.getLatLng())}))},_getTooltipText:function(){return{text:L.drawLocal.edit.handlers.edit.tooltip.text,subtext:L.drawLocal.edit.handlers.edit.tooltip.subtext}},_updateTooltip:function(){this._tooltip.updateContent(this._getTooltipText())},_revertLayer:function(t){var e=L.Util.stamp(t);t.edited=!1,this._uneditedLayerProps.hasOwnProperty(e)&amp;&amp;(t instanceof L.Polyline||t instanceof L.Polygon||t instanceof L.Rectangle?t.setLatLngs(this._uneditedLayerProps[e].latlngs):t instanceof L.Circle?(t.setLatLng(this._uneditedLayerProps[e].latlng),t.setRadius(this._uneditedLayerProps[e].radius)):t instanceof L.Marker&amp;&amp;t.setLatLng(this._uneditedLayerProps[e].latlng),t.fire(&quot;revert-edited&quot;,{layer:t}))},_enableLayerEdit:function(t){var e,i,o=t.layer||t.target||t;this._backupLayer(o),this.options.poly&amp;&amp;(i=L.Util.extend({},this.options.poly),o.options.poly=i),this.options.selectedPathOptions&amp;&amp;(e=L.Util.extend({},this.options.selectedPathOptions),e.maintainColor&amp;&amp;(e.color=o.options.color,e.fillColor=o.options.fillColor),o.options.original=L.extend({},o.options),o.options.editing=e),this.isMarker?(o.dragging.enable(),o.on(&quot;dragend&quot;,this._onMarkerDragEnd).on(&quot;touchmove&quot;,this._onTouchMove,this).on(&quot;MSPointerMove&quot;,this._onTouchMove,this).on(&quot;touchend&quot;,this._onMarkerDragEnd,this).on(&quot;MSPointerUp&quot;,this._onMarkerDragEnd,this)):o.editing.enable()},_disableLayerEdit:function(t){var e=t.layer||t.target||t;e.edited=!1,e.editing.disable(),delete e.options.editing,delete e.options.original,this._selectedPathOptions&amp;&amp;(e instanceof L.Marker?this._toggleMarkerHighlight(e):(e.setStyle(e.options.previousOptions),delete e.options.previousOptions)),e instanceof L.Marker?(e.dragging.disable(),e.off(&quot;dragend&quot;,this._onMarkerDragEnd,this).off(&quot;touchmove&quot;,this._onTouchMove,this).off(&quot;MSPointerMove&quot;,this._onTouchMove,this).off(&quot;touchend&quot;,this._onMarkerDragEnd,this).off(&quot;MSPointerUp&quot;,this._onMarkerDragEnd,this)):e.editing.disable()},_onMouseMove:function(t){this._tooltip.updatePosition(t.latlng)},_onTouchMove:function(t){var e=t.originalEvent.changedTouches[0],i=this._map.mouseEventToLayerPoint(e),o=this._map.layerPointToLatLng(i);t.target.setLatLng(o)},_hasAvailableLayers:function(){return 0!==this._featureGroup.getLayers().length}}),L.EditToolbar.Delete=L.Handler.extend({statics:{TYPE:&quot;remove&quot;},includes:L.Mixin.Events,initialize:function(t,e){if(L.Handler.prototype.initialize.call(this,t),L.Util.setOptions(this,e),this._deletableLayers=this.options.featureGroup,!(this._deletableLayers instanceof L.FeatureGroup))throw new Error(&quot;options.featureGroup must be a L.FeatureGroup&quot;);this.type=L.EditToolbar.Delete.TYPE},enable:function(){!this._enabled&amp;&amp;this._hasAvailableLayers()&amp;&amp;(this.fire(&quot;enabled&quot;,{handler:this.type}),this._map.fire(&quot;draw:deletestart&quot;,{handler:this.type}),L.Handler.prototype.enable.call(this),this._deletableLayers.on(&quot;layeradd&quot;,this._enableLayerDelete,this).on(&quot;layerremove&quot;,this._disableLayerDelete,this))},disable:function(){this._enabled&amp;&amp;(this._deletableLayers.off(&quot;layeradd&quot;,this._enableLayerDelete,this).off(&quot;layerremove&quot;,this._disableLayerDelete,this),L.Handler.prototype.disable.call(this),this._map.fire(&quot;draw:deletestop&quot;,{handler:this.type}),this.fire(&quot;disabled&quot;,{handler:this.type}))},addHooks:function(){var t=this._map;t&amp;&amp;(t.getContainer().focus(),this._deletableLayers.eachLayer(this._enableLayerDelete,this),this._deletedLayers=new L.LayerGroup,this._tooltip=new L.Tooltip(this._map),this._tooltip.updateContent({text:L.drawLocal.edit.handlers.remove.tooltip.text}),this._map.on(&quot;mousemove&quot;,this._onMouseMove,this))},removeHooks:function(){this._map&amp;&amp;(this._deletableLayers.eachLayer(this._disableLayerDelete,this),this._deletedLayers=null,this._tooltip.dispose(),this._tooltip=null,this._map.off(&quot;mousemove&quot;,this._onMouseMove,this))},revertLayers:function(){this._deletedLayers.eachLayer(function(t){this._deletableLayers.addLayer(t),t.fire(&quot;revert-deleted&quot;,{layer:t})},this)},save:function(){this._map.fire(&quot;draw:deleted&quot;,{layers:this._deletedLayers})},_enableLayerDelete:function(t){var e=t.layer||t.target||t;e.on(&quot;click&quot;,this._removeLayer,this)},_disableLayerDelete:function(t){var e=t.layer||t.target||t;e.off(&quot;click&quot;,this._removeLayer,this),this._deletedLayers.removeLayer(e)},_removeLayer:function(t){var e=t.layer||t.target||t;this._deletableLayers.removeLayer(e),this._deletedLayers.addLayer(e),e.fire(&quot;deleted&quot;)},_onMouseMove:function(t){this._tooltip.updatePosition(t.latlng)},_hasAvailableLayers:function(){return 0!==this._deletableLayers.getLayers().length}})}(window,document);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.13586s from github-fe136-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-iEca8f7ED/lBjvvi3dFbaJavjXcvgXkATCVN/8JepJA=" src="https://assets-cdn.github.com/assets/frameworks-88471af1fec40ff9418efbe2ddd15b6896af8d772f8179004c254dffc25ea490.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-WtbGLNNaOYS94XFi7Lh/N8+Um69h9PnnP40Ogv6k8JE=" src="https://assets-cdn.github.com/assets/github-5ad6c62cd35a3984bde17162ecb87f37cf949baf61f4f9e73f8d0e82fea4f091.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

