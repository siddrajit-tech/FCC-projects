def favorite_songs(playlist):
    target_key = "plays"
    for dict in playlist:
      values = (dict[target_key])
      print(max(values))
    
favorite_songs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ])   