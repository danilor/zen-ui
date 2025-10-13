import ZenInput from './ZenInput';
import { useState } from 'react';
import ZenIcon from './ZenIcon';
import { TouchableOpacity } from 'react-native';

type ZenSearchProps = {
  onChangeTerm?: (term: string) => void
  initialTerm?: string,
  placeholder?: string
}

/**
 * A search input field with a search icon on the left and a clear icon on the right.
 * It is a wrapper around the ZenInput component with predefined props for search functionality.
 *
 * @param onChangeTerm A callback function that is called when the search term changes.
 *
 * @param initialTerm
 * @param placeholder
 * @see ZenInput
 * @constructor
 */
export default function ZenSearch(
  {
    onChangeTerm = (term: string) => {return term;},
    initialTerm = '',
    placeholder = 'Type to search...'
  }: ZenSearchProps
) {

  const [search, setSearch] = useState(initialTerm);

  const closeIcon = ()=>{
    return (
      <TouchableOpacity onPress={()=>setSearch('')}>
        <ZenIcon name={'xmark-circle'} />
      </TouchableOpacity>
    );
  }

  return (
    <ZenInput
      leftIcon={'search-engine'}
      placeholder={placeholder}
      rightAccessory={ (search !== '') ? closeIcon() : null }
      value={search}
      onChangeText={(text) => { setSearch(text); onChangeTerm(text); }}
    />
  );

}
