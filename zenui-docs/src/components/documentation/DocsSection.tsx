import docs from './../../json/docs.json';
import DocsSingle from './DocsSingle.tsx';
type Props = {
  title: string;
  category: string;
  description?: string;
  icon?: string;
}
export default function DocsSection(
  {title,category, description, icon}: Props
){

  const docData = docs.filter(d => d.category === category);

  if(docData.length === 0){
    return null;
  }

  return (
    <>
      <section>
        <header>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </header>
        <hr />
        {
          docData.map((doc, index) => (
            <DocsSingle icon={icon ?? 'zi-codepen'} key={index} {...doc} />
          ))
        }
      </section>
    </>
  );
}
