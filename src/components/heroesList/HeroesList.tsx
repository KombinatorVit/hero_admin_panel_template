import {FC, useCallback, useMemo} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import {useGetHeroesQuery, useDeleteHeroMutation} from '../../api/apiSlice';

import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

import './heroesList.scss';
import {useAppSelector} from "../../hooks/hooks";
import {Hero} from "../../type/mainType";

const HeroesList: FC = () => {
    const {
        data: heroes = [],
        isLoading,
        isError,
    } = useGetHeroesQuery(10);

    const [deleteHero] = useDeleteHeroMutation();

    const activeFilter = useAppSelector(state => state.filters.activeFilter);

    const filteredHeroes = useMemo(() => {
        const filteredHeroes = heroes.slice();

        if (activeFilter === 'all') {
            return filteredHeroes;
        } else {
            return filteredHeroes.filter(item => item.element === activeFilter);
        }
    }, [heroes, activeFilter]);

    const onDelete = useCallback((id:string)  => {
        deleteHero(id);
    }, []);

    if (isLoading) {
        return <Spinner/>;
    } else if (isError) {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr: Hero[]) => {
        if (arr.length === 0) {
            return (
                <CSSTransition
                    timeout={0}
                    classNames="hero">
                    <h5 className="text-center mt-5">Героев пока нет, увы</h5>
                </CSSTransition>
            )
        }

        return arr.map(({id, ...props}) => {
            return (
                <CSSTransition
                    key={id}
                    timeout={500}
                    classNames="hero">
                    <HeroesListItem  {...props} onDelete={() =>onDelete(id)} />
                </CSSTransition>
            )
        })
    }

    const elements = renderHeroesList(filteredHeroes);
    return (
        <TransitionGroup component="ul">
            {elements}
        </TransitionGroup>
    )
}

export default HeroesList;