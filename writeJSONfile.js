fs.writeFile(__dirname+'/logs/data.json', JSON.stringify(data), err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
