import render_empty_feed_notice from "../templates/empty_feed_notice.hbs";

type QueryWord = {
    query_word: string;
    is_stop_word: boolean;
};

export type SearchData = {
    query_words: QueryWord[];
    has_stop_word: boolean;
    stream_query?: string;
    topic_query?: string;
    is_empty_string_topic?: boolean;
};

export type NarrowBannerData = {
    title: string;
    html?: string;
    search_data?: SearchData;
    update_hash?: string;
};

export function narrow_error(narrow_banner_data: NarrowBannerData): string {
    const title = narrow_banner_data.title;
    const html = narrow_banner_data.html;
    const search_data = narrow_banner_data.search_data;
    const update_hash = narrow_banner_data.update_hash;

    const empty_feed_notice = render_empty_feed_notice({title, html, search_data, update_hash});
    return empty_feed_notice;
}
