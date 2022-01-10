import ApparatusListBox from '../components/apparatusLists/ApparatusListBox'

it('renders correctly', () => {
    const tree = ApparatusListBox({metadata,handleAssetBundleChange});
    expect(tree).toMatchSnapshot();
  });