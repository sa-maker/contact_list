export function buildArrayDict(key_array){
  let ret_dict = {}
  for(var key of key_array){
    ret_dict[key] = []
  }
  return ret_dict
}

export function tabeliseList(objList, tabs) {
  // this makes a dictionary of a contact list according to the list of tabs and the first letter of the contacts last name
  // if the first letter of the last name is not in the tab list it will be ignored
  const ret_dict = buildArrayDict(tabs) 
  for(var element of objList){
    if(typeof element.name.last !== 'undefined') {
      let key = element.name.last.toLowerCase().charAt(0)
      if(typeof ret_dict[key] !=='undefined'){ 
        ret_dict[key].push(element)
      }
    }
  }
  return ret_dict
}