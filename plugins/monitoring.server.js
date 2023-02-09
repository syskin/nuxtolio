/* eslint-disable no-param-reassign, no-underscore-dangle */
import newrelic from 'newrelic'

// https://discuss.newrelic.com/t/new-relic-for-nuxt-vue-with-ssr-and-spa/160295/2
export default ({ app, route }) => {
  newrelic.setTransactionName(route.path)

  // newrelic.getBrowserTimingHeader() returns a script with surrounding <script> tag HTML
  const scriptHTML = newrelic.getBrowserTimingHeader()
  if (scriptHTML) {
    const hid = 'newrelic'

    // We must extract the JS source
    const innerHTML = scriptHTML
      .replace(/^<script( [^>]+)*>/, '') // Remove opening tag
      .replace(/<\/script>$/, '') // Remove closing tag

    // Insert in first position in head
    app.head.script.unshift({ hid, type: 'text/javascript', innerHTML })

    // Disable Escaping for this script
    // https://vue-meta.nuxtjs.org/api/#dangerouslydisablesanitizersbytagid
    app.head.__dangerouslyDisableSanitizersByTagID = {
      ...(app.head.__dangerouslyDisableSanitizersByTagID ?? {}),
      [hid]: ['innerHTML'],
    }
  }
}
