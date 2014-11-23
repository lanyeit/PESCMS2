<select class="input-leng3" name="<?= $field['field_name'] ?>" <?= $field['field_required'] == '1' ? 'required' : '' ?> >
    <?php foreach (json_decode($field['field_option'], true) as $key => $value) : ?>
        <option value="<?= $key ?>" <?= $field['value'] == $key ? 'selected="selected"' : empty($field['value']) && $field['field_default'] == $key ? 'selected="selected"' : '' ?>><?= $value ?></option>
    <?php endforeach; ?>
</select>