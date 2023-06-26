import axios from 'axios'

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const by = document.createElement('span')

  img.src = article.authorPhoto
  img.alt = 'Photo of author'

  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')
  
  headline.textContent = article.headline
  by.textContent = `By ${article.authorName}`

  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgContainer)
  author.appendChild(by)
  imgContainer.appendChild(img)

  return card

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5001/api/articles')
       .then(res => {

          const javascript = res.data.articles.javascript
          const bootstrap = res.data.articles.bootstrap
          const technology = res.data.articles.technology
          const jquery = res.data.articles.jquery
          const node = res.data.articles.node

          for (let article of javascript) { //for...of loops are used for iterable items, such as arrays, objects, etc
            const card = Card(article)
            document.querySelector(selector).appendChild(card)
          }
          for (let article of bootstrap) {
            const card = Card(article)
            document.querySelector(selector).appendChild(card)
          }
          for (let article of technology) {
            const card = Card(article)
            document.querySelector(selector).appendChild(card)
          }
          for (let article of jquery) {
            const card = Card(article)
            document.querySelector(selector).appendChild(card)
          }
          for (let article of node) {
            const card = Card(article)
            document.querySelector(selector).appendChild(card)
          }
  })
}

export { Card, cardAppender }
