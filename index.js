const 
  aquireSpotifySongs = require('./Spotify/aquireSpotifySavedSongs')
  addSongsToGoogle = require('./Google Music/addSongsToGoogle')

main()

async function main() {
  console.log('Lets move your songs!')
  console.log('Start with getting all your saved songs from Spotify')

  let songs = await aquireSpotifySongs()

  console.log(`Great! we found ${songs.length} songs!`)
  console.log('lets save them to Google Music')

  await addSongsToGoogle(songs)

  console.log('Songs added!')
}