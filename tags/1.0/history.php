<?php $all_wpcm_items = get_wpcm_list(); ?>
<div class="wpcm-main-container">
    <div class="wpcm-pull-left wpcm-section-title">History</div>
    <div style="clear: both;"></div>
    <div class="wpcm-history-list">
        <table id="wpcm-history-table" class="widefat">
            <thead>
            <tr>
                <th>Name</th>
                <th>Date Created</th>
                <th>Last Modified</th>
                <th>Shortcode</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <?php foreach ($all_wpcm_items as $wpcm_item): ?>
                <tr>
                    <td><?php echo $wpcm_item->name; ?></td>
                    <td><?php echo $wpcm_item->date_created; ?></td>
                    <td><?php echo $wpcm_item->last_modified; ?></td>
                    <td>[wp_easy_bubble_menu id="<?php echo $wpcm_item->idx; ?>"]</td>
<!--                    <td><a class="wpcm_copy_sc" href="#" onclick="window.clipboardData.setData('text', '[wp_easy_bubble_menu  id=".--><?php //echo $wpcm_item->idx; ?><!--".']');">Copy Shortcode</a></td>-->
                    <td class="wpcm-table-action-menu"><a href="/wp-admin/admin.php?page=wp_bubble_menu&wpcm_edit_bubble=<?php echo $wpcm_item->idx; ?>">Edit</a><a
                            id="wpcm_del_<?php echo $wpcm_item->idx; ?>" class="wpcm-delete-item" href="">Delete</a>
                    </td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>