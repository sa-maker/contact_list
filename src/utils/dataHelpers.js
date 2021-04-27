export function alphabetizeList(objList) {
  const ret_dict = {a:[], b:[], c:[], d:[], e:[], f:[], g:[], h:[], i:[], j:[], k:[], l:[], m:[], n:[], o:[], p:[], q:[], r:[], s:[], t:[], u:[], v:[], w:[], x:[], y:[], z:[], _:[]}  
  for(var element of objList){
    if(typeof element.name.last !== 'undefined') {
      let key = element.name.last.toLowerCase().charAt(0)
      if(typeof ret_dict[key] ==='undefined'){ key = '_'}
      ret_dict[key].push(element)
    }
  }
  if(ret_dict['_'].length === 0 ){
    delete ret_dict['_']  
  }
  return ret_dict
}